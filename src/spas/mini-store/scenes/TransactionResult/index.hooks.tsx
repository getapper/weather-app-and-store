import { useSelector } from "react-redux";
import { selectors } from "@/spas/mini-store/redux-store";

export const useTransactionResult = () => {
  const orders = useSelector(selectors.getOrders);
  const order = orders[orders.length - 1];
  return { order };
};
