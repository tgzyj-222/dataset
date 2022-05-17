import { combineReducers }  from 'redux';
import { ReturnState } from 'iron-redux';
import {reducer as homeReducer } from '../pages/Home/homeRedux';

export default combineReducers({
  homeReducer,
});


const totalReducers = {
  homeReducer,
};

export type IDEState = ReturnState<typeof totalReducers>

