/*
 *
 * Ihsannaulprods reducer
 *
 */
import produce from 'immer';
import {
  ADD_VALIDATION_ERROR,
  ASSIGN_IHSANNUALPRODS,
  ASYNC_END,
  ASYNC_START,
  SET_FORM_METHOD,
  SET_PAGE_NUMBER,
  SET_PAGE_SIZE,
  SET_SEARCH_KEYWORD,
  SET_ID,
  SET_FORM_VALUES,
  SET_FILTER_FORM_VALUES,
  SET_INITIAL_VALUES,
  CLEAR_FORM,
  CLEAR_FORM_FIELD,
  INITIATE_CLEAN,
  SET_SORT_COL_NAME,
  SET_SORT_ORDER,
} from 'containers/Ihsannualprods/constants';

const EmptyField = {
  entity: '',
  source: '',
  entity_type: '',
  primary_product: '',
  lease_name: '',
  well_num: '',
  api: '',
  regulatory_api: '',
  year_val: null,
  annual_liquid: null,
  annual_gas: null,
  annual_water: null,
  prior_cum_liquid: null,
  prior_cum_gas: null,
  prior_cum_water: null,
  rec_status: 'A',
};

export const initialState = {
  initialValues: EmptyField,
  formValues: {},
  filterformValues: {},
  sort_by: '',
  sort_order: '',
  keywords: '',
  pageNumber: 1,
  pageSize: 10,
  limit: 10,
  ihsannualprods: {
    results: [],
    pageSize: 10,
    currentPage: 0,
    totalItems: 0,
    next: 0,
    previous: 0,
  },
  errors: [],
  isLoading: false,
  formMethod: null,
  initiateClean: false,
  id: null,
};

/* eslint-disable default-case, no-param-reassign */
const IhsannualprodsReducer = produce((draft, action) => {
  switch (action.type) {
    case ASSIGN_IHSANNUALPRODS:
      draft.ihsannualprods = action.ihsannualprods;
      draft.isLoading = false;
      break;
    case CLEAR_FORM_FIELD:
      draft.clearFormField = true;
      break;
    case INITIATE_CLEAN:
      draft.initiateClean = true;
      break;
    case SET_INITIAL_VALUES:
      //console.log(action);
      draft.initialValues = action.initialValues;
      break;
    case SET_FORM_VALUES:
      //console.log(action);
      draft.formValues = action.formValues;
      break;
    case SET_FILTER_FORM_VALUES:
      draft.keywords = '';
      draft.filterformValues = action.filterformValues;
      break;
    case SET_PAGE_NUMBER:
      draft.pageNumber = action.pageNumber;
      break;
    case SET_FORM_METHOD:
      draft.formMethod = action.method;
      break;
    case SET_ID:
      draft.id = action.id;
      break;
    case SET_SEARCH_KEYWORD:
      draft.keywords = action.keywords;
      break;
    case SET_PAGE_SIZE:
      draft.pageSize = action.pageSize;
      break;
    case ADD_VALIDATION_ERROR:
      draft.errors = action.errors;
      break;
    case ASYNC_START:
      draft.isLoading = true;
      break;
    case ASYNC_END:
      draft.isLoading = false;
      break;
    case SET_SORT_COL_NAME:
      draft.sort_by = action.sort_by;
      break;
    case SET_SORT_ORDER:
      draft.sort_order = action.sort_order;
      break;
    case CLEAR_FORM:
      console.log(draft);
      draft.keywords = '';
      draft.errors = [];
      draft.formValues = {};
      draft.initialValues = EmptyField;

      draft.clearFormField = false;
      draft.isLoading = false;
      draft.formMethod = null;
      draft.initiateClean = false;
      draft.id = null;
      //  console.log(draft);
      break;
  }
}, initialState);

export default IhsannualprodsReducer;
