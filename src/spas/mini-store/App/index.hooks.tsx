import theme from "@/themes";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spas/mini-store/redux-store";
import { Product } from "@/spas/mini-store/redux-store/slices/products/products.interfaces";
import tShirtWhite from "@/assets/t-shirt-bianco.jpg";
import pdpWhite from "@/assets/pdp-white.jpg";
import tShirtBlue from "@/assets/t-shirt-blue.jpg";
import pdpBlue from "@/assets/pdp-blue.jpg";
import tShirtWhiteArchive from "@/assets/t-shirt-fay-archive-bianco.jpg";
import pdpWhiteArchive from "@/assets/pdp-white-archive.jpg";
import tShirtBlackArchive from "@/assets/t-shirt-fay-archive-nero.jpg";
import pdpBlackArchive from "@/assets/pdp-black-archive.jpg";

const fakeData: Product[] = [
  {
    id: 0,
    name: "T-Shirt - Bianco",
    description:
      "T-shirt girocollo a manica corta in jersey mélange, arricchita dalla patch logo Fay applicata sul retro. Un raffinato essenziale del guardaroba casual.",
    sku: "NPMB3471780UCXB001",
    price: 110,
    qty: 10,
    thumbnail: tShirtWhite,
    pdpImage: pdpWhite,
  },
  {
    id: 1,
    name: "T-Shirt - Blu",
    description:
      "T-shirt girocollo a manica corta in jersey mélange, arricchita dalla patch logo Fay applicata sul retro. Un raffinato essenziale del guardaroba casual.",
    sku: "NPMB3471780UCXU807",
    price: 110,
    qty: 10,
    thumbnail: tShirtBlue,
    pdpImage: pdpBlue,
  },
  {
    id: 2,
    name: "T-Shirt - Fay Archive - Bianco",
    description:
      "T-Shirt girocollo a manica corta in jersey di cotone lavato, con stampa personalizzata Fay Archive sul petto.",
    sku: "MPMB346105LTGGB004",
    price: 120,
    qty: 5,
    thumbnail: tShirtWhiteArchive,
    pdpImage: pdpWhiteArchive,
  },
  {
    id: 3,
    name: "T-Shirt - Fay Archive - Nero",
    description:
      "T-Shirt girocollo a manica corta in jersey di cotone lavato, con stampa personalizzata Fay Archive sul petto.",
    sku: "MPMB346105LTGGB999",
    price: 120,
    qty: 5,
    thumbnail: tShirtBlackArchive,
    pdpImage: pdpBlackArchive,
  },
];

const useAppHooks = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectors.getFeedbackOpen);
  const type = useSelector(selectors.getFeedbackType);
  const message = useSelector(selectors.getFeedbackMessage);

  useEffect(() => {
    dispatch(actions.appStartup());
  }, [dispatch]);

  useEffect(() => {
    dispatch(actions.loadProducts(fakeData));
  }, [dispatch]);

  const handleClose = useCallback(() => {
    dispatch(actions.closeFeedback());
  }, [dispatch]);

  return {
    theme,
    open,
    type,
    message,
    handleClose,
  };
};

export default useAppHooks;
