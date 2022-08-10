import {
  DELETE_ITEM_BY_ID,
  GET_IHSWELLONELINER_BY_ID,
  QUERY_IHSWELLONELINERS,
  SUBMIT_FORM,
} from 'containers/Ihswelloneliner/constants';
import {
  asyncStartAction,
  asyncEndAction,
  queryIHSWellOneLinersAction,
  assignIHSWellOneLinersAction,
  setInitialValuesAction,
  clearFormFieldAction,
  enterValidationErrorAction,
} from 'containers/Ihswelloneliner/actions';

import {
  makeFilterFormValuesSelector,
  makeFormMethodSelector,
  makeFormValuesSelector,
  makeIdSelector,
  makeKeywordsSelector,
  makePageNumberSelector,
  makePageSizeSelector,
  makeSortColNameSelector,
  makeSortOrderSelector,
} from 'containers/Ihswelloneliner/selectors';

import { put, select, call, takeLatest } from 'redux-saga/effects';
import ApiEndpoint from 'utils/api';
import commonMessage from 'common/messages';
import request from 'utils/request';
import { showAlert, showFormattedAlert } from 'common/saga';
import { DELETE, GET, PUT } from 'utils/constants';
import { buildFilterQueryString } from 'common/helpers';

export function* handleQueryIHSWellOneLinersList() {
  yield put(asyncStartAction());
  const pageNumber = yield select(makePageNumberSelector());
  const keywords = yield select(makeKeywordsSelector());
  const filterformValues = yield select(makeFilterFormValuesSelector());
  const limit = yield select(makePageSizeSelector());
  const sort_by = yield select(makeSortColNameSelector());
  const sort_order = yield select(makeSortOrderSelector());
  const queryString = buildFilterQueryString(
    sort_by,
    sort_order,
    filterformValues,
    keywords,
    pageNumber,
    limit,
  );
  const requestUrl = `/ihs-well-one-liner?${queryString}`;

  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET);

  try {
    const response = yield call(request, payload);
    // console.log(response);
    return yield put(assignIHSWellOneLinersAction(response));
  } catch (error) {
    return yield put(asyncEndAction());
  }
}
export function* handleDeleteItemById(data) {
  yield put(asyncStartAction());
  const requestUrl = `/ihs-well-one-liner/${data.id}`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, DELETE);
  try {
    yield call(request, payload);
    yield put(queryIHSWellOneLinersAction());
    yield put(asyncEndAction());
    return yield showFormattedAlert('success', commonMessage.deleteSuccess);
  } catch (error) {
    yield put(asyncEndAction());
    return yield showFormattedAlert('error', commonMessage.deleteError);
  }
}

export function* handleGetIHSWellOneLinerById() {
  yield put(asyncStartAction());
  const id = yield select(makeIdSelector());
  const requestUrl = `/ihs-well-one-liner/${id}`;
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

export function* handleSubmitForm() {
  const formValues = yield select(makeFormValuesSelector());
  console.log(formValues);
  const formMethod = yield select(makeFormMethodSelector());
  const id = yield select(makeIdSelector());
  const requestUrl = `/ihs-well-one-liner${formMethod === PUT ? `/${id}` : ''}`;
  const payload = ApiEndpoint.makeApiPayload(
    requestUrl,
    formMethod,
    formValues,
  );
  try {
    yield call(request, payload);
    yield put(queryIHSWellOneLinersAction());
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
export default function* PermissionSaga() {
  yield takeLatest(QUERY_IHSWELLONELINERS, handleQueryIHSWellOneLinersList);
  yield takeLatest(GET_IHSWELLONELINER_BY_ID, handleGetIHSWellOneLinerById);
  yield takeLatest(SUBMIT_FORM, handleSubmitForm);
  yield takeLatest(DELETE_ITEM_BY_ID, handleDeleteItemById);
}
