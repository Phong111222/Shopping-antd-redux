import { FetchReducer, ShopReducer } from './reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({ FetchReducer, ShopReducer });
export default RootReducer;
