import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  DELETE_ITEM_BY_ID,
  GET_UNITORDERDETAIL_BY_ID,
  QUERY_UNITORDERDETAILS,
  QUERY_UNITORDERDETAIL,
  SUBMIT_FORM,
} from 'containers/Unitorderdetail/constants';
import ApiEndpoint from 'utils/api';
import commonMessage from 'common/messages';
import request from 'utils/request';
import {
  assignUnitOrderDetailAction,
  assignUnitOrderDetailsAction,
  asyncEndAction,
  asyncStartAction,
  clearFormFieldAction,
  enterValidationErrorAction,
  queryUnitOrderDetailAction,
  queryUnitOrderDetailsAction,
  setInitialValuesAction,
} from 'containers/Unitorderdetail/actions';
import {
  makeFormMethodSelector,
  makeFormValuesSelector,
  makeFilterFormValuesSelector,
  makeIdSelector,
  makeKeywordsSelector,
  makePageNumberSelector,
  makePageSizeSelector,
  makeuoIdSelector,
} from 'containers/Unitorderdetail/selectors';
import { showAlert, showFormattedAlert } from 'common/saga';
import { DELETE, GET, PUT } from 'utils/constants';
import { buildFilterQueryString } from 'common/helpers';

export function* handleSubmitForm() {
  const formValues = yield select(makeFormValuesSelector());
  const formMethod = yield select(makeFormMethodSelector());
  const uoId = yield select(makeuoIdSelector());
  //console.log(uoId);
  const id = yield select(makeIdSelector());
  const requestUrl = `/${uoId}/unit-order-detail${
    formMethod === PUT ? `/${id}` : ''
  }`;

  const payload = ApiEndpoint.makeApiPayload(
    requestUrl,
    formMethod,
    formValues,
  );
  try {
    yield call(request, payload);
    yield put(queryUnitOrderDetailsAction());
    yield put(clearFormFieldAction());
    yield put(asyncEndAction());
    const message =
      formMethod === PUT
        ? commonMessage.updateSuccess
        : commonMessage.addSuccess;
    return yield showFormattedAlert('success', message);
  } catch (error) {
    console.log(error);
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      return yield put(enterValidationErrorAction(error.data.message));
    }
    return yield showAlert('error', error.data.message);
  }
}

export function* handleDeleteItemById(data) {
  yield put(asyncStartAction());
  const uoId = yield select(makeuoIdSelector());
  const requestUrl = `/${uoId}/unit-order-detail/${data.id}`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, DELETE);
  try {
    yield call(request, payload);
    yield put(queryUnitOrderDetailAction());
    yield put(asyncEndAction());
    return yield showFormattedAlert('success', commonMessage.deleteSuccess);
  } catch (error) {
    yield put(asyncEndAction());
    return yield showFormattedAlert('error', commonMessage.deleteError);
  }
}

export function* handleQueryUnitOrderDetailsList() {
  yield put(asyncStartAction());
  const pageNumber = yield select(makePageNumberSelector());
  const keywords = yield select(makeKeywordsSelector());
  const filterformValues = yield select(makeFilterFormValuesSelector());
  const uoId = yield select(makeuoIdSelector());

  const limit = yield select(makePageSizeSelector());
  const queryString = buildFilterQueryString(
    filterformValues,
    keywords,
    pageNumber,
    limit,
  );
  const requestUrl = `/${uoId}/unit-order-detail?${queryString}`;
  console.log(requestUrl);
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET);
  try {
    const response = yield call(request, payload);
    console.log(response);
    return yield put(assignUnitOrderDetailAction(response));
  } catch (error) {
    return yield put(asyncEndAction());
  }
}

export function* handleQueryUnitOrderDetail() {
  yield put(asyncStartAction());
  const uoId = yield select(makeuoIdSelector());
  const id = yield select(makeIdSelector());
  const requestUrl = `/${uoId}/unit-order-detail/${id}`;

  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET);
  try {
    const response = yield call(request, payload);
    return yield put(assignUnitOrderDetailAction(response));
  } catch (error) {
    return yield put(asyncEndAction());
  }
}
export function* handleGetUnitOrderDetailById() {
  yield put(asyncStartAction());
  const uoId = yield select(makeuoIdSelector());
  const id = yield select(makeIdSelector());
  const requestUrl = `/${uoId}/unit-order-detail/${id}`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET);
  try {
    const response = yield call(request, payload);
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
  yield takeLatest(QUERY_UNITORDERDETAILS, handleQueryUnitOrderDetailsList);
  yield takeLatest(QUERY_UNITORDERDETAIL, handleQueryUnitOrderDetail);
  yield takeLatest(GET_UNITORDERDETAIL_BY_ID, handleGetUnitOrderDetailById);
  yield takeLatest(SUBMIT_FORM, handleSubmitForm);
  yield takeLatest(DELETE_ITEM_BY_ID, handleDeleteItemById);
}
