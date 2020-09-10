import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducer/RootReducer';
import Api from '../actions/api';

const store = createStore(RootReducer);

export default store;
