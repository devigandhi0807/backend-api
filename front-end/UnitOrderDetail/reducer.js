/*
 *
 * UnitOrderDetail reducer
 *
 */
import produce from 'immer';
import {
  ADD_VALIDATION_ERROR,
  ASSIGN_UNITORDERDETAILS,
  ASSIGN_UNITORDERDETAIL,
  ASYNC_END,
  ASYNC_START,
  SET_FORM_METHOD,
  SET_PAGE_NUMBER,
  SET_PAGE_SIZE,
  SET_SEARCH_KEYWORD,
  SET_ID,
  SET_UOID,
  SET_FORM_VALUES,
  SET_FILTER_FORM_VALUES,
  SET_INITIAL_VALUES,
  CLEAR_FORM,
  CLEAR_FORM_FIELD,
  INITIATE_CLEAN,
} from 'containers/UnitOrderDetail/constants';

const EmptyField = {
  tract_no: '',
  gross_area_in_acres: '',
  net_area_in_acres: '',
  pct_of_unit: '',
  interest_type: '',
  ownership_display_name: '',
  cur_notes: '',
  rec_status: '',
};

export const initialState = {
  initialValues: EmptyField,
  formValues: {},
  filterformValues: {},
  keywords: '',
  pageNumber: 1,
  pageSize: 10,
  limit: 10,
  unitorderdetails: {
    results: [],
    pageSize: 10,
    currentPage: 0,
    totalItems: 0,
    next: 0,
    previous: 0,
  },
  unitorderdetail: {},
  errors: [],
  isLoading: false,
  formMethod: null,
  initiateClean: false,
  id: null,
  uoId: null,
};

/* eslint-disable default-case, no-param-reassign */
const UnitOrderDetailReducer = produce((draft, action) => {
  // @ts-ignore
  switch (action.type) {
    case ASSIGN_UNITORDERDETAILS:
      // @ts-ignore
      draft.unitorderdetails = action.unitorderdetails;
      // @ts-ignore
      draft.isLoading = false;
      break;
    case ASSIGN_UNITORDERDETAIL:
      // @ts-ignore
      draft.unitorderdetail = action.unitorderdetail;
      // @ts-ignore
      draft.isLoading = false;
      break;
    case CLEAR_FORM_FIELD:
      // @ts-ignore
      draft.clearFormField = true;
      break;
    case INITIATE_CLEAN:
      // @ts-ignore
      draft.initiateClean = true;
      break;
    case SET_INITIAL_VALUES:
      // @ts-ignore
      draft.initialValues = action.initialValues;
      break;
    case SET_FORM_VALUES:
      // @ts-ignore

      draft.formValues = action.formValues;
      break;
    case SET_FILTER_FORM_VALUES:
      // @ts-ignore
      draft.filterformValues = action.filterformValues;
      break;
    case SET_PAGE_NUMBER:
      // @ts-ignore
      draft.pageNumber = action.pageNumber;
      break;
    case SET_FORM_METHOD:
      // @ts-ignore
      draft.formMethod = action.method;
      break;
    case SET_ID:
      // @ts-ignore
      draft.id = action.id;
      break;
    case SET_UOID:
      // @ts-ignore
      draft.uoId = action.uoId;
      break;
    case SET_SEARCH_KEYWORD:
      // @ts-ignore
      draft.keywords = action.keywords;
      break;
    case SET_PAGE_SIZE:
      // @ts-ignore
      draft.pageSize = action.pageSize;
      break;
    case ADD_VALIDATION_ERROR:
      // @ts-ignore
      draft.errors = action.errors;
      break;
    case ASYNC_START:
      // @ts-ignore
      draft.isLoading = true;
      break;
    case ASYNC_END:
      // @ts-ignore
      draft.isLoading = false;
      break;
    case CLEAR_FORM:
      // @ts-ignore
      draft.keywords = '';
      // @ts-ignore
      draft.errors = [];
      // @ts-ignore
      draft.formValues = {};
      // @ts-ignore
      draft.initialValues = EmptyField;

      // @ts-ignore
      draft.clearFormField = false;
      // @ts-ignore
      draft.isLoading = false;
      // @ts-ignore
      draft.formMethod = null;
      // @ts-ignore
      draft.initiateClean = false;
      // @ts-ignore
      draft.id = null;
      //  console.log(draft);
      break;
  }
}, initialState);

export default UnitOrderDetailReducer;
