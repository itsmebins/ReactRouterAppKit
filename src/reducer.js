import { combineReducers } from 'redux';
import common from './reducers/common';
import home from './reducers/home';
import offers from './reducers/offers';

export default combineReducers({
  common,
  home,
  offers
});
