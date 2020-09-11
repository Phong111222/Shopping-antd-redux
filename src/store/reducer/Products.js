import { createSlice } from '@reduxjs/toolkit';
import { apiCalling } from '../actionApi/api';
const slice = createSlice({
  name: 'Products ',
  initialState: {
    listProduct: [],
    loading: false,
    filterList: [],
  },
  reducers: {
    RequestProductSending: (Products, action) => {
      Products.loading = true;
    },
    RequestProductsSuccess: (Products, action) => {
      Products.listProduct = action.payload;
      Products.loading = false;
    },
    RequestProductsFailed: (Products, action) => {
      Products.loading = false;
    },
    searchProduct: (Products, action) => {
      // Products.listProduct.filter(
      //   (product) => (product.id = action.payload.id)
      // ); const regex = new RegExp(`${action.str}`, "gi");
      const regex = new RegExp(`${action.payload.input}`, 'gi');
      Products.filterList = [
        ...Products.listProduct.filter((item) => item.name.match(regex)),
      ];
    },
  },
});
export const {
  RequestProductSending,
  RequestProductsSuccess,
  RequestProductsFailed,
  searchProduct,
} = slice.actions;
export const loadProduct = () => (dispatch, getState) => {
  dispatch(
    apiCalling({
      url: '/sivadass/raw/upload/v1535817394/json/products.json',
      Start: RequestProductSending.type,
      Success: RequestProductsSuccess.type,
      Failed: RequestProductsFailed.type,
    })
  );
};
export default slice.reducer;
