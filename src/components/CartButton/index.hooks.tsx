import { useSelector } from "react-redux";
import { selectors } from "@/spas/mini-store/redux-store";

export const useCartButton = () => {
  const cartList = useSelector(selectors.getProductCart);

  const cartItemsNumber = cartList
    .map((el) => el.qty)
    .reduce((acc, curr) => acc + curr, 0);

  return { cartItemsNumber };
};
