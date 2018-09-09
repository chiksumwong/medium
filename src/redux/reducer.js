import { combineReducers } from 'redux';
// uses "combineReducers" function from redux to combine our reducers 
//into a single reducer function.

import articles from './reducers/articles';
import authUser from './reducers/authUser';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  articles,
  authUser,
  common,
  router: routerReducer
});