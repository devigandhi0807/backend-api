import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  DELETE_ITEM_BY_ID,
  GET_IHSANNUALPROD_BY_ID,
  QUERY_IHSANNUALPRODS,
  SUBMIT_FORM,
} from 'containers/Ihsannualprods/constants';
import ApiEndpoint from 'utils/api';
import commonMessage from 'common/messages';
import request from 'utils/request';
import {
  assignIhsannualprodsAction,
  asyncEndAction,
  asyncStartAction,
  clearFormFieldAction,
  enterValidationErrorAction,
  queryIhsannualprodsAction,
  setInitialValuesAction,
} from 'containers/Ihsannualprods/actions';
import {
  makeFormMethodSelector,
  makeFormValuesSelector,
  makeFilterFormValuesSelector,
  makeIdSelector,
  makeKeywordsSelector,
  makePageNumberSelector,
  makePageSizeSelector,
  makeSortColNameSelector,
  makeSortOrderSelector,
} from 'containers/Ihsannualprods/selectors';
import { showAlert, showFormattedAlert } from 'common/saga';
import { DELETE, GET, PUT } from 'utils/constants';
import { buildFilterQueryString } from 'common/helpers';

export function* handleSubmitForm() {
  const formValues = yield select(makeFormValuesSelector());
  const formMethod = yield select(makeFormMethodSelector());
  const id = yield select(makeIdSelector());
  const requestUrl = `/ihs-annual-prods${formMethod === PUT ? `/${id}` : ''}`;
  const payload = ApiEndpoint.makeApiPayload(
    requestUrl,
    formMethod,
    formValues,
  );
  try {
    yield call(request, payload);
    yield put(queryIhsannualprodsAction());
    yield put(clearFormFieldAction());
    yield put(asyncEndAction());
    const message =
      formMethod === PUT
        ? commonMessage.updateSuccess
        : commonMessage.addSuccess;
    return yield showFormattedAlert('success', message);
  } catch (error) {
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      return yield put(enterValidationErrorAction(error.data.message));
    }
    return yield showAlert('error', error.data.message);
  }
}

export function* handleDeleteItemById(data) {
  yield put(asyncStartAction());
  const requestUrl = `/ihsannualprods/${data.id}`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, DELETE);
  try {
    yield call(request, payload);
    yield put(queryIhsannualprodsAction());
    yield put(asyncEndAction());
    return yield showFormattedAlert('success', commonMessage.deleteSuccess);
  } catch (error) {
    yield put(asyncEndAction());
    return yield showFormattedAlert('error', commonMessage.deleteError);
  }
}

export function* handleQueryIhsannualprodsList() {
  yield put(asyncStartAction());
  const pageNumber = yield select(makePageNumberSelector());
  const keywords = yield select(makeKeywordsSelector());
  const filterformValues = yield select(makeFilterFormValuesSelector());
  const sort_by = yield select(makeSortColNameSelector());
  const sort_order = yield select(makeSortOrderSelector());
  //console.log(filterformValues);
  const limit = yield select(makePageSizeSelector());
  const queryString = buildFilterQueryString(
    sort_by,
    sort_order,
    filterformValues,
    keywords,
    pageNumber,
    limit,
  );
  //console.log(queryString);
  const requestUrl = `/ihsannualprods?${queryString}`;

  //console.log(requestUrl);
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET);
  try {
    const response = yield call(request, payload);
    //console.log(response);
    return yield put(assignIhsannualprodsAction(response));
  } catch (error) {
    return yield put(asyncEndAction());
  }
}

export function* handleGetIhsannualprodById() {
  yield put(asyncStartAction());
  const id = yield select(makeIdSelector());
  const requestUrl = `/ihsannualprods/${id}`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET);
  try {
    const response = yield call(request, payload);
    // console.log(response);
    yield put(
      setInitialValuesAction({
        ...response,
      }),
    );
    return yield put(asyncEndAction());
  } catch (error) {
    return yield put(asyncEndAction());
  }
}

export default function* PermissionSaga() {
  yield takeLatest(QUERY_IHSANNUALPRODS, handleQueryIhsannualprodsList);
  yield takeLatest(GET_IHSANNUALPROD_BY_ID, handleGetIhsannualprodById);
  yield takeLatest(SUBMIT_FORM, handleSubmitForm);
  yield takeLatest(DELETE_ITEM_BY_ID, handleDeleteItemById);
}
