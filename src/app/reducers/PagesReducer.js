// @flow
import { combineReducers } from 'redux';
import ClientsSearchPageDuck from '../components/client/ClientsSearchPageDuck';

export default combineReducers({
  clientSearch: ClientsSearchPageDuck,
});
