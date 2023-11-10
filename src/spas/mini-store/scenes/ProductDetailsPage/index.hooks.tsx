import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spas/mini-store/redux-store";
import { useCallback, useMemo } from "react";

export const useProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector(selectors.getProductList);
  const product = productList.find((el) => el.id === parseInt(id));
  const cartList = useSelector(selectors.getProductCart);
  const cartItemQty = useMemo(() => {
    const cartItem = cartList.find((p) => p.id === parseInt(id));
    if (typeof cartItem === "undefined") return 0;
    return cartItem.qty;
  }, [cartList, id]);

  const addToCartHandler = useCallback(() => {
    dispatch(actions.addToCart(product));
    console.log(cartList);
  }, [dispatch, product]);

  return { product, addToCartHandler, cartItemQty };
};
