// @flow
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { LOADINGS } from '../../common/Constants';
import { clearErrorState, setErrorState } from '../../common/ErrorDuck';
import { toggleLoadingState } from '../../common/LoadingDuck';

import { pagesSelector } from '../../reducers/selectors';
import { getActionTypeFunction } from '../../utils/ActionTypeUtils';
import { setClientsData } from './ClientsDataDuck';
import { getClients } from './ClientService';

const getActionType = getActionTypeFunction('CLIENTS');

export const setSearchTerm = createAction(getActionType('SEARCH_TERM', 'SET'), (dispatch, data) => data);

export const searchForClients = createAction(getActionType('CLIENTS', 'SEARCH'), (dispatch, formData) => {
  const loadingKey = LOADINGS.CLIENT.FETCH;
  const { searchTerm } = formData;
  dispatch(setSearchTerm(dispatch.searchTerm));

  dispatch(toggleLoadingState(dispatch, loadingKey, true));
  dispatch(clearErrorState(dispatch, loadingKey));

  getClients(searchTerm)
    .then(data => {
      dispatch(setClientsData(dispatch, data));
      dispatch(toggleLoadingState(dispatch, loadingKey, false));

      return data;
    })
    .catch(e => {
      dispatch(setErrorState(dispatch, loadingKey, e));
      dispatch(toggleLoadingState(dispatch, loadingKey, false));
    });
});

const initialState = {
  searchTerm: '',
};

export default handleActions(
  new Map([
    [
      setSearchTerm,
      (state, action: { payload: {} }) => ({
        ...state,
        searchTerm: action.payload,
      }),
    ],
  ]),
  initialState,
);

export const clientsSearchPageSelector = createSelector(
  pagesSelector,
  (state: {}) => state.clientSearch,
);
