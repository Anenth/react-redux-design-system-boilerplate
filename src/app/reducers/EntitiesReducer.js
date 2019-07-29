// @flow
import { combineReducers } from 'redux';
import ClientsDataDuck from '../components/client/ClientsDataDuck';

export default combineReducers({
  clients: ClientsDataDuck,
});
