import { createSelector } from 'reselect';
import { initialState } from 'containers/Ihsannualprods/reducer';

/**
 * Direct selector to the Ihsannualprods state domain
 */

const selectIhsannualprodsDomain = (state) =>
  state.ihsannualprods || initialState;

/**
 * Other specific selectors
 */

const makeIsLoadingSelector = () =>
  createSelector(selectIhsannualprodsDomain, (substate) => substate.isLoading);

const makeSortColNameSelector = () =>
  createSelector(selectIhsannualprodsDomain, (substate) => substate.sort_by);

const makeSortOrderSelector = () =>
  createSelector(selectIhsannualprodsDomain, (substate) => substate.sort_order);
const makeKeywordsSelector = () =>
  createSelector(selectIhsannualprodsDomain, (substate) => substate.keywords);

const makeFormMethodSelector = () =>
  createSelector(selectIhsannualprodsDomain, (substate) => substate.formMethod);

const makeIdSelector = () =>
  createSelector(selectIhsannualprodsDomain, (substate) => substate.id);

const makePageNumberSelector = () =>
  createSelector(selectIhsannualprodsDomain, (substate) => substate.pageNumber);

const makePageSizeSelector = () =>
  createSelector(selectIhsannualprodsDomain, (substate) => substate.pageSize);

const makeIhsannualprodsSelector = () =>
  createSelector(
    selectIhsannualprodsDomain,
    (substate) => substate.ihsannualprods,
  );

const makeErrorSelector = () =>
  createSelector(selectIhsannualprodsDomain, (substate) => substate.errors);

const makeInitiateCleanFieldSelector = () =>
  createSelector(
    selectIhsannualprodsDomain,
    (substate) => substate.initiateClean,
  );

const makeClearFormFieldSelector = () =>
  createSelector(
    selectIhsannualprodsDomain,
    (substate) => substate.clearFormField,
  );

const makeInitialValuesSelector = () =>
  createSelector(
    selectIhsannualprodsDomain,
    (substate) => substate.initialValues,
  );

const makeFormValuesSelector = () =>
  createSelector(selectIhsannualprodsDomain, (substate) => substate.formValues);

const makeFilterFormValuesSelector = () =>
  createSelector(
    selectIhsannualprodsDomain,
    (substate) => substate.filterformValues,
  );

export {
  makeInitialValuesSelector,
  makeFormValuesSelector,
  makeFilterFormValuesSelector,
  makeClearFormFieldSelector,
  makePageSizeSelector,
  makeKeywordsSelector,
  makeIdSelector,
  makeFormMethodSelector,
  makeIsLoadingSelector,
  makeErrorSelector,
  makePageNumberSelector,
  makeIhsannualprodsSelector,
  makeInitiateCleanFieldSelector,
  makeSortColNameSelector,
  makeSortOrderSelector,
};
