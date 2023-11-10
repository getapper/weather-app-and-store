import React, { memo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppSnackbar } from "@/components/AppSnackbar";
import useAppHooks from "./index.hooks";
import {
  CheckoutPage,
  ProductDetailsPage,
  StoreHomepage,
} from "@/spas/mini-store/scenes";

const App: React.FC = () => {
  const { theme, open, type, message, handleClose } = useAppHooks();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/mini-store">
        <Routes>
          <Route path="/" element={<StoreHomepage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
      <AppSnackbar
        open={open}
        message={message}
        severity={type}
        onClose={handleClose}
      />
    </ThemeProvider>
  );
};

export default memo(App);
