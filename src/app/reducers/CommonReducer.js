// @flow
import { combineReducers } from 'redux';
import ErrorDuck from '../common/ErrorDuck';
import LoadingDuck from '../common/LoadingDuck';
import ModalDuck from '../common/ModalDuck';

export default combineReducers({
  modal: ModalDuck,
  loading: LoadingDuck,
  errors: ErrorDuck,
});
