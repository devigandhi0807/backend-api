/*
 *
 * Ihsannualprod actions
 *
 */

import {
  ADD_VALIDATION_ERROR,
  ASYNC_END,
  ASYNC_START,
  CLEAR_FORM,
  CLEAR_FORM_FIELD,
  DELETE_ITEM_BY_ID,
  GET_IHSANNUALPROD_BY_ID,
  QUERY_IHSANNUALPRODS,
  SET_FORM_METHOD,
  SET_FORM_VALUES,
  SET_FILTER_FORM_VALUES,
  ASSIGN_IHSANNUALPRODS,
  SET_ID,
  SET_INITIAL_VALUES,
  SET_PAGE_NUMBER,
  SET_PAGE_SIZE,
  SET_SEARCH_KEYWORD,
  SUBMIT_FORM,
  INITIATE_CLEAN,
  SET_SORT_COL_NAME,
  SET_SORT_ORDER,
} from 'containers/Ihsannualprods/constants';

export function enterValidationErrorAction(errors) {
  return {
    type: ADD_VALIDATION_ERROR,
    errors,
  };
}

export function queryIhsannualprodsAction() {
  return {
    type: QUERY_IHSANNUALPRODS,
  };
}

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

export function clearFormAction() {
  return {
    type: CLEAR_FORM,
  };
}

export function clearFormFieldAction() {
  return {
    type: CLEAR_FORM_FIELD,
  };
}

export function getIhsannualprodByIdAction() {
  return {
    type: GET_IHSANNUALPROD_BY_ID,
  };
}

export function assignIhsannualprodsAction(ihsannualprods) {
  return {
    type: ASSIGN_IHSANNUALPRODS,
    ihsannualprods,
  };
}

export function submitFormAction() {
  return {
    type: SUBMIT_FORM,
  };
}

export function initiateCleanAction() {
  return {
    type: INITIATE_CLEAN,
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

export function setFormMethodAction(method) {
  return {
    type: SET_FORM_METHOD,
    method,
  };
}

export function setIdAction(id) {
  return {
    type: SET_ID,
    id,
  };
}

export function setSearchKeywordAction(keywords) {
  return {
    type: SET_SEARCH_KEYWORD,
    keywords,
  };
}

export function setFilterFormValues(filterformValues) {
  return {
    type: SET_FILTER_FORM_VALUES,
    filterformValues,
  };
}
export function setFormValues(formValues) {
  return {
    type: SET_FORM_VALUES,
    formValues,
  };
}

export function setInitialValuesAction(initialValues) {
  return {
    type: SET_INITIAL_VALUES,
    initialValues,
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
