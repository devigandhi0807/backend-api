import { createSelector } from 'reselect';
import { initialState } from 'containers/ihswelloneliner/reducer';

/**
 * Direct selector to the Ihsannualprods state domain
 */

const selectIHSWellOneLinerDomain = (state) =>
  state.ihswelloneliners || initialState;

/**
 * Other specific selectors
 */

export const makeIsLoadingSelector = () =>
  createSelector(selectIHSWellOneLinerDomain, (substate) => substate.isLoading);

export const makeKeywordsSelector = () =>
  createSelector(selectIHSWellOneLinerDomain, (substate) => substate.keywords);

export const makeFilterFormValuesSelector = () =>
  createSelector(
    selectIHSWellOneLinerDomain,
    (substate) => substate.filterformValues,
  );

export const makePageNumberSelector = () =>
  createSelector(
    selectIHSWellOneLinerDomain,
    (substate) => substate.pageNumber,
  );

export const makePageSizeSelector = () =>
  createSelector(selectIHSWellOneLinerDomain, (substate) => substate.pageSize);

export const makeIHSWellOneLinersSelector = () =>
  createSelector(
    selectIHSWellOneLinerDomain,
    (substate) => substate.ihswelloneliners,
  );

export const makeInitiateCleanFieldSelector = () =>
  createSelector(
    selectIHSWellOneLinerDomain,
    (substate) => substate.initiateClean,
  );

export const makeInitialValuesSelector = () =>
  createSelector(
    selectIHSWellOneLinerDomain,
    (substate) => substate.initialValues,
  );

export const makeClearFormFieldSelector = () =>
  createSelector(
    selectIHSWellOneLinerDomain,
    (substate) => substate.clearFormField,
  );

export const makeErrorSelector = () =>
  createSelector(selectIHSWellOneLinerDomain, (substate) => substate.errors);

export const makeSortColNameSelector = () =>
  createSelector(selectIHSWellOneLinerDomain, (substate) => substate.sort_by);
export const makeSortOrderSelector = () =>
  createSelector(
    selectIHSWellOneLinerDomain,
    (substate) => substate.sort_order,
  );
export const makeIdSelector = () =>
  createSelector(selectIHSWellOneLinerDomain, (substate) => substate.id);

export const makeFormMethodSelector = () =>
  createSelector(
    selectIHSWellOneLinerDomain,
    (substate) => substate.formMethod,
  );

export const makeFormValuesSelector = () =>
  createSelector(
    selectIHSWellOneLinerDomain,
    (substate) => substate.formValues,
  );
