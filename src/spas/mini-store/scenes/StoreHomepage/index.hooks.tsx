import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spas/mini-store/redux-store";
import tShirtWhite from "@/assets/t-shirt-bianco.jpg";
import tShirtBlue from "@/assets/t-shirt-bianco.jpg";
import tShirtWhiteArchive from "@/assets/t-shirt-bianco.jpg";
import tShirtBlackArchive from "@/assets/t-shirt-bianco.jpg";
import { useEffect } from "react";
import { Product } from "@/spas/mini-store/redux-store/slices/products/products.interfaces";

const fakeData: Product[] = [
  {
    id: 0,
    name: "T-Shirt - Bianco",
    price: 110,
    qty: 10,
    thumbnail: tShirtWhite,
  },
  {
    id: 1,
    name: "T-Shirt - Blu",
    price: 110,
    qty: 10,
    thumbnail: tShirtBlue,
  },
  {
    id: 2,
    name: "T-Shirt - Fay Archive - Bianco",
    price: 120,
    qty: 5,
    thumbnail: tShirtWhiteArchive,
  },
  {
    id: 3,
    name: "T-Shirt - Fay Archive - Nero",
    price: 120,
    qty: 5,
    thumbnail: tShirtBlackArchive,
  },
];

export const useStoreHomepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadProducts(fakeData));
  }, [dispatch]);

  return {};
};
