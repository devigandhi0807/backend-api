import { createSelector } from 'reselect';
import { initialState } from 'containers/UnitOrderDetail/reducer';

/**
 * Direct selector to the UnitOrderDetail state domain
 */

const selectUnitOrderDetailDomain = (state) =>
  state.unitorderdetails || initialState;

/**
 * Other specific selectors
 */

const makeIsLoadingSelector = () =>
  createSelector(selectUnitOrderDetailDomain, (substate) => substate.isLoading);

const makeKeywordsSelector = () =>
  createSelector(selectUnitOrderDetailDomain, (substate) => substate.keywords);

const makeFormMethodSelector = () =>
  createSelector(
    selectUnitOrderDetailDomain,
    (substate) => substate.formMethod,
  );

const makeIdSelector = () =>
  createSelector(selectUnitOrderDetailDomain, (substate) => substate.id);

const makeuoIdSelector = () =>
  createSelector(selectUnitOrderDetailDomain, (substate) => substate.uoId);
const makePageNumberSelector = () =>
  createSelector(
    selectUnitOrderDetailDomain,
    (substate) => substate.pageNumber,
  );

const makePageSizeSelector = () =>
  createSelector(selectUnitOrderDetailDomain, (substate) => substate.pageSize);

const makeUnitOrderDetailSelector = () =>
  createSelector(
    selectUnitOrderDetailDomain,
    (substate) => substate.unitorderdetail,
  );
const makeUnitOrderDetailsSelector = () =>
  createSelector(
    selectUnitOrderDetailDomain,
    (substate) => substate.unitorderdetails,
  );
const makeErrorSelector = () =>
  createSelector(selectUnitOrderDetailDomain, (substate) => substate.errors);

const makeInitiateCleanFieldSelector = () =>
  createSelector(
    selectUnitOrderDetailDomain,
    (substate) => substate.initiateClean,
  );

const makeClearFormFieldSelector = () =>
  createSelector(
    selectUnitOrderDetailDomain,
    (substate) => substate.clearFormField,
  );

const makeInitialValuesSelector = () =>
  createSelector(
    selectUnitOrderDetailDomain,
    (substate) => substate.initialValues,
  );

const makeFormValuesSelector = () =>
  createSelector(
    selectUnitOrderDetailDomain,
    (substate) => substate.formValues,
  );

const makeFilterFormValuesSelector = () =>
  createSelector(
    selectUnitOrderDetailDomain,
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
  makeuoIdSelector,
  makeFormMethodSelector,
  makeIsLoadingSelector,
  makeErrorSelector,
  makePageNumberSelector,
  makeUnitOrderDetailSelector,
  makeUnitOrderDetailsSelector,
  makeInitiateCleanFieldSelector,
};
