import { RootState } from "@/spas/mini-store/redux-store";

export const getProducts = (state: RootState) => state?.products;
export const getProductList = (state: RootState) => state?.products?.list;
export const getProductCart = (state: RootState) => state?.products?.cart;
