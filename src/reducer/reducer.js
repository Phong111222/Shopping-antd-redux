import { act } from 'react-dom/test-utils';
import { SEARCH_PRODUCT, FETCH_DATA } from '../actions/actionType';

const initialState = {
  Data: [],
  isFetching: false,
  Fetchded: true,
  fail: true,
};

export const FetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      break;

    default:
      return state;
  }
};
export const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT:
    //   const regex = new RegExp(`${action.str}`, 'gi');
    //   return { ...state, Data: Data.filter((item) => item.name.match(regex)) };
    default:
      return state;
  }
};
