// @flow
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { LOADINGS } from '../common/Constants';
import { clearErrorState, setErrorState } from '../common/ErrorDuck';
import { toggleLoadingState } from '../common/LoadingDuck';
import { getInitData } from '../services/AppService';
import { logError } from '../services/ErrorTracker';
import { getActionTypeFunction } from '../utils/ActionTypeUtils';

const getActionType = getActionTypeFunction('APP', true);

export const fetchAppData = createAction(getActionType('DATA', 'FETCH'), dispatch => {
  dispatch(toggleLoadingState(dispatch, LOADINGS.APP_LOADING, true));
  dispatch(clearErrorState(dispatch, LOADINGS.APP_LOADING));

  getInitData()
    .then(data => {
      dispatch(toggleLoadingState(dispatch, LOADINGS.APP_LOADING, false));

      return data;
    })
    .catch(e => {
      dispatch(setErrorState(dispatch, LOADINGS.APP_LOADING, e));
      dispatch(toggleLoadingState(dispatch, LOADINGS.APP_LOADING, false));
      logError('App load fetch', e);
      throw e;
    });
});

export const setAppData = createAction(getActionType('DATA', 'SET'), (dispatch, data) => data);

const initialState = {
  data: {},
};

export default handleActions(
  new Map([
    [
      setAppData,
      (state, action) => ({
        ...state,
        data: action.payload,
      }),
    ],
  ]),
  initialState,
);

export const appSelector = (state: any) => state.app;

export const appDataSelector = createSelector(
  appSelector,
  (state: any) => state.data,
);
