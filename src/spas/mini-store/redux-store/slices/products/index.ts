import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./products.selectors";
import { Product, ProductsState } from "./products.interfaces";

const initialState: ProductsState = {
  list: [],
  cart: [],
};

export const productsStore = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, action: { payload: Product[] }) => {
      if (state.list.length === 0) state.list = action.payload;
    },
    addToCart: (state, action: { payload: Product }) => {
      const updatedCart = [...state.cart];
      const cartProductIndex = state.cart.findIndex(
        (prod) => prod.id === action.payload.id,
      );
      if (cartProductIndex !== -1) {
        updatedCart[cartProductIndex] = {
          ...updatedCart[cartProductIndex],
          qty: updatedCart[cartProductIndex].qty + 1,
        };
        state.cart = updatedCart;
      } else {
        updatedCart.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action: { payload: number }) => {
      const updatedCart = [...state.cart];
      const cartProductIndex = state.cart.findIndex(
        (prod) => prod.id === action.payload,
      );
      if (updatedCart[cartProductIndex].qty === 1)
        state.cart = updatedCart.filter((prod) => prod.id !== action.payload);
      else {
        updatedCart[cartProductIndex] = {
          ...updatedCart[cartProductIndex],
          qty: updatedCart[cartProductIndex].qty - 1,
        };
        state.cart = updatedCart;
      }
    },
  },
});

export { selectors };
