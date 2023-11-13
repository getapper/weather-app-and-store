import { Product } from "@/spas/mini-store/redux-store/slices/products/products.interfaces";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spas/mini-store/redux-store";

export const useCheckoutItem = (product: Product) => {
  const dispatch = useDispatch();
  const listItem = useSelector(selectors.getProductList).find(
    (el) => el.id === product.id,
  );
  const cartItem = useSelector(selectors.getProductCart).find(
    (el) => el.id === product.id,
  );

  const addToCartHandler = useCallback(() => {
    dispatch(actions.addToCart(product));
  }, [product, dispatch]);

  const removeFromCartHandler = useCallback(() => {
    dispatch(actions.removeFromCart(product.id));
  }, [product, dispatch]);

  return { addToCartHandler, removeFromCartHandler, cartItem, listItem };
};
