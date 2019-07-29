import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import AppDuck from '../components/AppDuck';
import CommonReducer from './CommonReducer';
import entities from './EntitiesReducer';
import PagesReducer from './PagesReducer';

export default (history) => combineReducers({
  entities,
  pages: PagesReducer,
  app: AppDuck,
  common: CommonReducer,
  router: connectRouter(history),
})

