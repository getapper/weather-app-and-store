import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./products.selectors";
import { Order, Product, ProductsState } from "./products.interfaces";

const initialState: ProductsState = {
  list: [],
  cart: [],
  orders: [],
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
      } else {
        updatedCart.push({ ...action.payload, qty: 1 });
      }
      state.cart = updatedCart;
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
    addOrder: (state, action: { payload: Order }) => {
      const updatedOrders = state.orders ? state.orders : [];
      const updatedList = state.list;
      updatedOrders.push(action.payload);
      state.orders = updatedOrders;
      action.payload.products.forEach((prod) => {
        const prodIndex = updatedList.findIndex((el) => el.id === prod.id);
        updatedList[prodIndex].qty -= prod.qty;
      });
      state.list = updatedList;
      state.cart = [];
    },
  },
});

export { selectors };
