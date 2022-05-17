import {createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const InitialState = {

};

const store = createStore(
  rootReducer,
  InitialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store;
