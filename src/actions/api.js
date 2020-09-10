import { FetchData } from '../actions/actions';
import { FETCH_DATA } from './actionType';
import axios from 'axios';
const Api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== FETCH_DATA) return next(action);

  const { url, method, Data, onSuccess, onError } = action.payload;
  try {
    const respone = await axios.request({
      baseURL: 'https://res.cloudinary.com',
      url,
      method,
      Data,
    });
    dispatch({ type: onSuccess, payload: respone.data });
  } catch (error) {
    dispatch({ type: onError, payload: error });
  }
};

export default Api;
