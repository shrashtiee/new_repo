import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers';

const middleware = [thunkMiddleware];
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['checkNetwork'],
};

const persistReducers = persistReducer(persistConfig, combineReducers);

export const store = createStore(
  persistReducers,
  applyMiddleware(...middleware),
);
export const persistor = persistStore(store);
