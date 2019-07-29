// @flow
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { Map as IMap } from 'immutable';
import {commonUISelector} from '../reducers/selectors';
import { getActionTypeFunction } from '../utils/ActionTypeUtils';
import { LOADINGS } from './Constants';

const getActionType = getActionTypeFunction('LOADING', true);

export const toggleLoadingState = createAction(
  getActionType('STATE', 'TOGGLE'),
  (dispatch, type: string, isLoading: boolean) => ({
    [type]: isLoading
  })
);

const initialState = {
  items: IMap({
    [LOADINGS.APP_LOADING]: true
  }),
};

export default handleActions(
  new Map([
    [
      toggleLoadingState,
      (state, action) => ({
        ...state,
        items: state.items.merge(action.payload)
      })
    ],
  ]),
  initialState
);

export const loadingsDataSelector = createSelector(
  commonUISelector,
  (state: any) => state.loading
);

export const isLoadingSelector = (type: string) =>
  createSelector(loadingsDataSelector, (state: any) => !!state.items.get(type));

