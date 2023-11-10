import React, { memo } from "react";
import { useCartButton } from "./index.hooks";
import { Button } from "@mui/material";
import CartIcon from "@mui/icons-material/LocalMallOutlined";
import { Link } from "react-router-dom";

type CartButtonProps = {};

export const CartButton = memo(({}: CartButtonProps) => {
  const { cartItemsNumber } = useCartButton();

  return (
    <Link to="/checkout">
      <Button
        variant={"contained"}
        startIcon={<CartIcon sx={{ width: 24, height: 24 }} />}
        sx={{
          color: "white",
          background: "none",
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: "1px solid #d2dde2",
          boxShadow: "8px 8px 12px -4px rgba(204,204,204,0.1)",
          "&:hover": { background: "#1a2631" },
        }}
      >
        {cartItemsNumber}
      </Button>
    </Link>
  );
});

CartButton.displayName = "CartButton";
