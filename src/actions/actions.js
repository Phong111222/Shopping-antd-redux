import { FETCH_DATA } from './actionType';

export const FetchData = {
  type: FETCH_DATA,
  payload: {
    url: '/sivadass/raw/upload/v1535817394/json/products.json',
    method: 'get',
    data: [],
    onSuccess: '',
    onError: 'failed',
  },
};
