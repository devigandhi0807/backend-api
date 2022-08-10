import {
  ASYNC_START,
  ASYNC_END,
  INITIATE_CLEAN,
  SET_INITIAL_VALUES,
  ASSIGN_IHSWELLONELINERS,
  SET_SEARCH_KEYWORDS,
  SET_FILTER_FORM_VALUES,
  SET_PAGE_NUMBER,
  SET_PAGE_SIZE,
  CLEAR_FORM,
  SET_FORM_VALUES,
  ADD_VALIDATION_ERROR,
  SET_FORM_METHOD,
  SET_SORT_COL_NAME,
  SET_SORT_ORDER,
  SET_ID,
  CLEAR_FORM_FIELD,
} from 'containers/Ihswelloneliner/constants';

import produce from 'immer';
import moment from 'moment';

const EmptyField = {
  uwi: '',
  source: '',
  api_number: '',
  ic_number: '',
  regulatory_api: '',
  operator_name: '',
  operator_city: '',
  current_operator_name: '',
  current_operator_city: '',
  lease_name: '',
  alternate_well_name: '',
  well_num: '',
  field_name: '',
  country_name: '',
  state_name: '',
  county_name: '',
  os_indicator: '',
  hole_direction: '',
  final_status: '',
  current_status: '',
  regulatory_status: '',
  regulatory_status_date: '',
  basin: '',
  basin_code: '',
  sub_basin: '',
  sub_basin_code: '',
  play_name: '',
  play_type: '',
  permit_number: '',
  permit_date: '',
  permit_status: '',
  permit_reissue_date: '',
  lease_acres: '',
  unit_of_measure: '',
  depth_total_driller: '',
  depth_total_logger: '',
  depth_true_vertical: '',
  depth_whipstock: '',
  class_initial_name: '',
  class_initial_code: '',
  class_final_name: '',
  class_final_code: '',
  status_final_code: '',
  formation_projected_name: '',
  depth_total_projected: '',
  formation_at_td_name: '',
  prodfit_formation_at_td_name: '',
  formation_producing_name: '',
  prodfit_top_form_prod_name: '',
  prodfit_base_form_prod_name: '',
  prodfit_80_degree_heel_pt_form: '',
  elevation_reference_value: '',
  elevation_reference_datum: '',
  ground_elevation: '',
  elevation_df: '',
  date_first_spud: '',
  date_spud: '',
  date_completion: '',
  date_rig_release: '',
  date_abandonment: '',
  date_first_report: '',
  date_last_activity: '',
  prodfit_update_date: '',
  depth_water_value: '',
  depth_water_datum: '',
  surface_latitude: '',
  surface_longitude: '',
  surface_ll_source: '',
  proposed_bh_latitude: '',
  proposed_bh_longitude: '',
  proposed_bh_ll_source: '',
  bh_latitude: '',
  bh_longitude: '',
  bh_ll_source: '',
  activity_code: '',
  permit_filer_long: '',
  permit_phone: '',
  rec_status: 'A',
};
export const initialState = {
  initialValues: EmptyField,
  formValues: {},
  filterformValues: {},
  keywords: '',
  sort_by: '',
  sort_order: '',
  pageNumber: 1,
  pageSize: 10,
  limit: 10,
  ihswelloneliners: {
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
  clearFormField: false,
  id: null,
};

const ihswellonelinersReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ASYNC_START:
        draft.isLoading = true;
        break;
      case ASYNC_END:
        draft.isLoading = false;
        break;
      case INITIATE_CLEAN:
        draft.initiateClean = true;
        break;
      case SET_INITIAL_VALUES:
        draft.initialValues = action.initialValues;
        draft.initialValues.regulatory_status_date =
          action.initialValues.regulatory_status_date !== null
            ? moment(action.initialValues.regulatory_status_date).format(
                'YYYY-MM-DD',
              )
            : null;
        draft.initialValues.prodfit_update_date =
          action.initialValues.prodfit_update_date !== null
            ? moment(action.initialValues.prodfit_update_date).format(
                'YYYY-MM-DD',
              )
            : null;
        draft.initialValues.permit_reissue_date =
          action.initialValues.permit_reissue_date !== null
            ? moment(action.initialValues.permit_reissue_date).format(
                'YYYY-MM-DD',
              )
            : null;
        draft.initialValues.permit_date =
          action.initialValues.permit_date !== null
            ? moment(action.initialValues.permit_date).format('YYYY-MM-DD')
            : null;
        draft.initialValues.date_spud =
          action.initialValues.date_spud !== null
            ? moment(action.initialValues.date_spud).format('YYYY-MM-DD')
            : null;
        draft.initialValues.date_rig_release =
          action.initialValues.date_rig_release !== null
            ? moment(action.initialValues.date_rig_release).format('YYYY-MM-DD')
            : null;
        draft.initialValues.date_last_activity =
          action.initialValues.date_last_activity !== null
            ? moment(action.initialValues.date_last_activity).format(
                'YYYY-MM-DD',
              )
            : null;
        draft.initialValues.date_first_spud =
          action.initialValues.date_first_spud !== null
            ? moment(action.initialValues.date_first_spud).format('YYYY-MM-DD')
            : null;
        draft.initialValues.date_first_report =
          action.initialValues.date_first_report !== null
            ? moment(action.initialValues.date_first_report).format(
                'YYYY-MM-DD',
              )
            : null;
        draft.initialValues.date_completion =
          action.initialValues.date_completion !== null
            ? moment(action.initialValues.date_completion).format('YYYY-MM-DD')
            : null;

        draft.initialValues.date_abandonment =
          action.initialValues.date_abandonment !== null
            ? moment(action.initialValues.date_abandonment).format('YYYY-MM-DD')
            : null;
        break;
      case SET_FORM_VALUES:
        draft.formValues = action.formValues;
        break;
      case ADD_VALIDATION_ERROR:
        draft.errors = action.errors;
        break;
      case ASSIGN_IHSWELLONELINERS:
        draft.ihswelloneliners = action.ihswelloneliners;
        draft.isLoading = false;
        break;
      case SET_SEARCH_KEYWORDS:
        draft.keywords = action.keywords;
        break;
      case SET_FILTER_FORM_VALUES:
        draft.filterformValues = action.filterformValues;
        break;
      case SET_PAGE_NUMBER:
        draft.pageNumber = action.pageNumber;
        break;
      case SET_PAGE_SIZE:
        draft.pageSize = action.pageSize;
        break;
      case SET_SORT_COL_NAME:
        draft.sort_by = action.sort_by;
        break;
      case SET_SORT_ORDER:
        draft.sort_order = action.sort_order;
        break;
      case SET_ID:
        draft.id = action.id;
        break;
      case CLEAR_FORM:
        draft.keywords = '';
        draft.errors = [];
        draft.formValues = {};
        draft.initialValues = EmptyField;
        draft.clearFormField = true;
        draft.isLoading = false;
        draft.formMethod = null;
        draft.initiateClean = false;
        draft.id = null;
        break;
      case SET_FORM_METHOD:
        draft.formMethod = action.method;
        break;
      case CLEAR_FORM_FIELD:
        draft.clearFormField = true;
        break;
      default:
        return draft;
    }
  });

export default ihswellonelinersReducer;
