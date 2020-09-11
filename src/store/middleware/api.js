import axios from 'axios';
import { apiCalling, apiFailed, apiSuccess } from '../actionApi/api';
// const url =
//   'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiCalling.type) return next(action);

  const { url, method, data, Calling, Success, Error } = action.payload;
  if (Calling) dispatch({ type: Calling });
  next(action);
  try {
    const response = await axios.request({
      baseURL: 'https://res.cloudinary.com/',
      url,
      method,
      data,
    });
    dispatch(apiSuccess(response.data));

    if (Success) dispatch({ type: Success, payload: response.data });
  } catch (error) {
    dispatch(apiFailed(error.message));
    if (Error) dispatch({ type: Error, payload: error.message });
  }
};

export default api;
