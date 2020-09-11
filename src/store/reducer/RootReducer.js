import { combineReducers } from 'redux';
import CartReducer from './Cart';
import ProductsReducer from './Products';
export default combineReducers({
  CartReducer,
  ProductsReducer,
});
