import React, { memo } from "react";
import { useProductDetailsPage } from "./index.hooks";

type ProductDetailsPageProps = {};

export const ProductDetailsPage = memo(({}: ProductDetailsPageProps) => {
  const { id } = useProductDetailsPage();

  return <div>{id}</div>;
});

ProductDetailsPage.displayName = "ProductDetailsPage";
