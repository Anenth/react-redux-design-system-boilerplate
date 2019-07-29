// @flow
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { Map as IMap } from 'immutable';
import {commonUISelector} from '../reducers/selectors';
import { getActionTypeFunction } from '../utils/ActionTypeUtils';

const getActionType = getActionTypeFunction('MODAL', true);

export const toggleModalVisibility = createAction(
  getActionType('TYPE', 'SHOW'),
  (dispatch, type: string, show: boolean) => ({
    [type]: show
  })
);

const initialState = {
  items: IMap({})
};

export default handleActions(
  new Map([
    [
      toggleModalVisibility,
      (state, action) => ({
        ...state,
        items: state.items.merge(action.payload)
      })
    ]
  ]),
  initialState
);

export const modalsSelector = createSelector(
  commonUISelector,
  (state: any) => state.modal.items
);

export const isModalOpenSelector = (type: string) =>
  createSelector(modalsSelector, (modals: any) => !!modals.get(type));

export const isPopoverOpenSelector = (type: string) =>
  createSelector(modalsSelector, (popover: any) => !!popover.get(type));
