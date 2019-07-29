// @flow
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { Map as IMap } from 'immutable';

import { entitiesDataSelector } from '../../reducers/selectors';
import { getActionTypeFunction } from '../../utils/ActionTypeUtils';

const getActionType = getActionTypeFunction('CLIENTS', false);

export const setClientsData = createAction(getActionType('DATA', 'SET'), (dispatch, data) => data);

const initialState = {
  items: IMap({}),
};

export default handleActions(
  new Map([
    [
      setClientsData,
      (state, action: { payload: {} }) => ({
        ...state,
        items: IMap(action.payload),
      }),
    ],
  ]),
  initialState,
);

const clientsDataSelector = createSelector(
  entitiesDataSelector,
  (state: {}) => state.clients,
);

export const clientsEntityDataSelector = createSelector(
  clientsDataSelector,
  (state: { items: any }) => state.items,
);

export const clientsItemsSelector = createSelector(
  clientsDataSelector,
  (state: { items: any }) => state.items.valueSeq().toJS(),
);
