// @flow
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { Map as IMap } from 'immutable';
import {commonUISelector} from '../reducers/selectors';
import { getActionTypeFunction } from '../utils/ActionTypeUtils';

const getActionType = getActionTypeFunction('ERROR', true);

export const setErrorState = createAction(
  getActionType('STATE', 'SET'),
  (dispatch, type: string, error: {}) => ({
    [type]: error
  })
);

export const clearErrorState = createAction(
  getActionType('STATE', 'CLEAR'),
  (dispatch, type: string) => type
);

const initialState = {
  items: IMap({})
};

export default handleActions(
  new Map([
    [
      setErrorState,
      (state, action) => ({
        ...state,
        items: state.items.merge(action.payload)
      })
    ],
    [
      clearErrorState,
      (state, action) => ({
        ...state,
        items: state.items.delete(action.payload)
      })
    ]
  ]),
  initialState
);

export const errorsDataSelector = createSelector(
  commonUISelector,
  (state: any) => state.errors
);

export const errorForTypeSelector = (type: string) =>
  createSelector(errorsDataSelector, (state: any) => !!state.items.get(type));

export const errorObjectForTypeSelector = (type: string) =>
  createSelector(errorsDataSelector, (state: any) => state.items.get(type));
