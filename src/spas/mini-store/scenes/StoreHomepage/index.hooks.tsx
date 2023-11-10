import { useSelector } from "react-redux";
import { selectors } from "@/spas/mini-store/redux-store";

export const useStoreHomepage = () => {
  const productList = useSelector(selectors.getProductList);

  return { productList };
};
