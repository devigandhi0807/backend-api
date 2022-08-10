import {
  ASYNC_START,
  ASYNC_END,
  INITIATE_CLEAN,
  SET_INITIAL_VALUES,
  QUERY_IHSWELLONELINERS,
  ASSIGN_IHSWELLONELINERS,
  SET_SEARCH_KEYWORDS,
  SET_FILTER_FORM_VALUES,
  SET_FORM_VALUES,
  DELETE_ITEM_BY_ID,
  SET_PAGE_NUMBER,
  SET_PAGE_SIZE,
  CLEAR_FORM,
  SUBMIT_FORM,
  SET_SORT_COL_NAME,
  SET_SORT_ORDER,
  SET_ID,
  GET_IHSWELLONELINER_BY_ID,
  SET_FORM_METHOD,
  CLEAR_FORM_FIELD,
  ADD_VALIDATION_ERROR,
} from 'containers/Ihswelloneliner/constants';

export function asyncStartAction() {
  return {
    type: ASYNC_START,
  };
}

export function asyncEndAction() {
  return {
    type: ASYNC_END,
  };
}

export function initiateCleanAction() {
  return {
    type: INITIATE_CLEAN,
  };
}

export function setInitialValuesAction(initialValues) {
  return {
    type: SET_INITIAL_VALUES,
    initialValues,
  };
}
export function setFormValues(formValues) {
  return {
    type: SET_FORM_VALUES,
    formValues,
  };
}
export function queryIHSWellOneLinersAction() {
  return {
    type: QUERY_IHSWELLONELINERS,
  };
}

export function assignIHSWellOneLinersAction(ihswelloneliners) {
  return {
    type: ASSIGN_IHSWELLONELINERS,
    ihswelloneliners,
  };
}

export function setSearchKeywordsAction(keywords) {
  return {
    type: SET_SEARCH_KEYWORDS,
    keywords,
  };
}

export function setFilterFormValues(filterformValues) {
  return {
    type: SET_FILTER_FORM_VALUES,
    filterformValues,
  };
}

export function deleteItemByIdAction(id) {
  return {
    type: DELETE_ITEM_BY_ID,
    id,
  };
}

export function setPageNumberAction(pageNumber) {
  return {
    type: SET_PAGE_NUMBER,
    pageNumber,
  };
}

export function setPageSizeAction(pageSize) {
  return {
    type: SET_PAGE_SIZE,
    pageSize,
  };
}

export function clearFormAction() {
  return {
    type: CLEAR_FORM,
  };
}

export function submitFormAction() {
  return {
    type: SUBMIT_FORM,
  };
}

export function setSortColNameAction(sort_by) {
  return {
    type: SET_SORT_COL_NAME,
    sort_by,
  };
}
export function setSortOrderAction(sort_order) {
  return {
    type: SET_SORT_ORDER,
    sort_order,
  };
}

export function setIdAction(id) {
  return {
    type: SET_ID,
    id,
  };
}
export function getIHSWellOneLinerByIdAction() {
  return {
    type: GET_IHSWELLONELINER_BY_ID,
  };
}

export function setFormMethodAction(method) {
  return {
    type: SET_FORM_METHOD,
    method,
  };
}

export function clearFormFieldAction() {
  return {
    type: CLEAR_FORM_FIELD,
  };
}

export function enterValidationErrorAction(errors) {
  return {
    type: ADD_VALIDATION_ERROR,
    errors,
  };
}
