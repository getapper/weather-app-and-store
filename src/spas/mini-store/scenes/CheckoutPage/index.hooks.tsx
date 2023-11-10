import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spas/mini-store/redux-store";
import { useCallback, useMemo, useState } from "react";
import { Order } from "@/spas/mini-store/redux-store/slices/products/products.interfaces";
import { useNavigate } from "react-router-dom";

export const useCheckoutPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const navigate = useNavigate();
  const cartList = useSelector(selectors.getProductCart);
  const dispatch = useDispatch();
  const ordersLen = useSelector(selectors.getOrders).length;

  const checkout = () => {
    const delay = 0.7 * Math.random() * 2 * 1000;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("ok");
      }, delay);
    });
  };

  const isDisabled = useMemo(() => {
    const card = paymentMethod.cardNumber.replaceAll(" ", "");
    return (
      name.length === 0 ||
      shippingAddress.length === 0 ||
      card.length !== 16 ||
      paymentMethod.cvv.length === 0 ||
      paymentMethod.expirationDate.length === 0 ||
      billingAddress.length === 0 ||
      isLoading === true
    );
  }, [name, shippingAddress, paymentMethod, billingAddress]);

  const changeNameHandler = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const changeCardHandler = useCallback((e) => {
    setPaymentMethod((prev) => ({ ...prev, cardNumber: e.target.value }));
  }, []);
  const changeExDateHandler = useCallback((e) => {
    setPaymentMethod((prev) => ({ ...prev, expirationDate: e.target.value }));
  }, []);
  const changeCVVHandler = useCallback((e) => {
    setPaymentMethod((prev) => ({ ...prev, cvv: e.target.value }));
  }, []);
  const changeShippingHandler = useCallback((e) => {
    setShippingAddress(e.target.value);
  }, []);
  const changeBillingHandler = useCallback((e) => {
    setBillingAddress(e.target.value);
  }, []);

  const checkoutHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      await checkout();
      const payment = { ...paymentMethod, cvv: parseInt(paymentMethod.cvv) };
      const order: Order = {
        id: ordersLen,
        fullName: name,
        shippingAddress,
        billingAddress,
        paymentMethod: payment,
        products: cartList,
      };
      dispatch(actions.addOrder(order));
    } catch (err) {
    } finally {
      setIsLoading(false);
      navigate("/transaction-result");
    }
  }, [
    dispatch,
    name,
    paymentMethod,
    billingAddress,
    shippingAddress,
    cartList,
  ]);

  return {
    cartList,
    name,
    shippingAddress,
    billingAddress,
    paymentMethod,
    changeNameHandler,
    changeCardHandler,
    changeBillingHandler,
    changeCVVHandler,
    changeShippingHandler,
    changeExDateHandler,
    isDisabled,
    checkoutHandler,
  };
};
