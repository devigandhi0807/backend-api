/*
 *
 * UnitOrderDetail reducer
 *
 */
import produce from 'immer';
import {
  ADD_VALIDATION_ERROR,
  ASSIGN_UNITORDERDETAILS,
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
} from 'containers/Unitorderdetail/constants';

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
  unitorderdetails: [],
  errors: [],
  isLoading: false,
  formMethod: null,
  initiateClean: false,
  id: null,
  uoId: null,
};


const UnitOrderDetailReducer = produce((draft, action) => {
  
  switch (action.type) {
    case ASSIGN_UNITORDERDETAILS:
      
      draft.unitorderdetails = action.unitorderdetails;
      console.log(draft.unitorderdetails);
      draft.isLoading = false;
      break;
    case CLEAR_FORM_FIELD:
      
      draft.clearFormField = true;
      break;
    case INITIATE_CLEAN:
      
      draft.initiateClean = true;
      break;
    case SET_INITIAL_VALUES:
      
      draft.initialValues = action.initialValues;
      break;
    case SET_FORM_VALUES:
      

      draft.formValues = action.formValues;
      break;
    case SET_FILTER_FORM_VALUES:
      
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
    case SET_UOID:
		
      draft.uoId = action.uoId;
	  
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
    case CLEAR_FORM:
      
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

export default UnitOrderDetailReducer;
