import { createSlice } from '@reduxjs/toolkit';

// tang hoac giam so luong cua tung loai san pham
// tan so luong loai san pham cua don hang
// xoa san pham trong don hang
// tinh tong tien
const slice = createSlice({
  name: 'Cart',
  initialState: {
    selectedtList: [],
    TotalAmount: 0,
  },
  reducers: {
    AddToCart: (Cart, action) => {
      const arr = [...Cart.selectedtList];
      if (!arr.length) {
        arr.push(action.payload);
        Cart.TotalAmount = action.payload.quantities * action.payload.price;
      } else {
        const item = arr.find((Item) => Item.name === action.payload.name);
        if (!item) {
          arr.push(action.payload);
          Cart.TotalAmount =
            Cart.TotalAmount + action.payload.quantities * action.payload.price;
        } else {
          const index = arr.findIndex((Item) => item.name === Item.name);
          arr[index] = {
            ...action.payload,
            quantities: item.quantities + action.payload.quantities,
          };
          Cart.TotalAmount += arr[index].price * action.payload.quantities;
        }
      }
      Cart.selectedtList = [...arr];
    },

    IncQuantities: (Cart, action) => {
      const index = Cart.selectedtList.findIndex(
        (Item) => Item.name === action.payload.name
      );
      Cart.selectedtList[index].quantities += 1;
      Cart.TotalAmount += action.payload.price;
    },
    DecQuantities: (Cart, action) => {
      const index = Cart.selectedtList.findIndex(
        (Item) => Item.name === action.payload.name
      );
      Cart.selectedtList[index].quantities -= 1;
      Cart.TotalAmount -= action.payload.price;
    },
    RemoveItem: (Cart, action) => {
      Cart.TotalAmount -= action.payload.price * action.payload.quantities;
      Cart.selectedtList = Cart.selectedtList.filter(
        (item) => item.name !== action.payload.name
      );
    },
  },
});
export const {
  AddToCart,
  RemoveItem,

  IncQuantities,
  DecQuantities,
} = slice.actions;
export default slice.reducer;
