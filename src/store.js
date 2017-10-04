// @flow
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import auth from './reducers/auth';

const reducer = combineReducers({
  auth
});

const middleware = applyMiddleware(thunk, createLogger());

/* Create store */
export default createStore(reducer, middleware);
