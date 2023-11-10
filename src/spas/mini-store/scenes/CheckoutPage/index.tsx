import React, { memo } from "react";
import { useCheckoutPage } from "./index.hooks";

type CheckoutPageProps = {};

export const CheckoutPage = memo(({}: CheckoutPageProps) => {
  const {} = useCheckoutPage();

  return <div>Checkout Page</div>;
});

CheckoutPage.displayName = "CheckoutPage";
