/**
 * Entry point for the reducers that will be used in the component.
 */
 import {combineReducers} from 'redux';
 import checkNetwork from './modules/checkNetwork';
 /**
  * Method contains combineReducer for combining reducers used in the components.
  * @type {Reducer<S>}
  */
 const AppReducer = combineReducers({
     checkNetwork
 });
 
 export default AppReducer; 