import React, { memo } from "react";
import { useCheckoutItem } from "./index.hooks";
import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { Product } from "@/spas/mini-store/redux-store/slices/products/products.interfaces";
import Image from "next/image";

type CheckoutItemProps = { product: Product; cartInteractions?: boolean };

const StyledButton = styled(Button)({
  color: "#0f1a24",
  fontSize: 20,
  border: "1px solid #0f1a254",
  minWidth: "0px",
  width: 35,
  height: 35,
  borderRadius: "50%",
});

export const CheckoutItem = memo(
  ({ product, cartInteractions = true }: CheckoutItemProps) => {
    const { addToCartHandler, removeFromCartHandler, cartItem, listItem } =
      useCheckoutItem(product);

    return (
      <Stack
        direction="row"
        bgcolor="whitesmoke"
        color="#0f1a24"
        height={100}
        width="55%"
        alignItems="center"
        justifyContent={"space-between"}
        paddingX={4}
        borderRadius="4px"
        border="1px solid #27343f"
        boxShadow="8px 8px 12px -4px rgba(204,204,204,0.1)"
      >
        <Box display="flex" alignItems="center" columnGap={3}>
          <Image
            style={{ borderRadius: 4 }}
            src={product.thumbnail}
            width={60}
            height={76}
            alt={product.name}
          />
          <Box>
            <Typography fontSize={18} fontWeight={600}>
              {product.name}
            </Typography>
            <Typography fontSize={14}>{product.sku}</Typography>
            <Typography fontSize={14}>{product.price}€</Typography>
          </Box>
        </Box>
        <Box textAlign="center">
          <Typography fontSize={14} fontWeight={600}>
            Prezzo: {product.qty * product.price}€
          </Typography>
          <Box
            display={cartInteractions ? "flex" : "none"}
            alignItems="center"
            justifyContent="center"
            columnGap={1}
          >
            <StyledButton onClick={removeFromCartHandler}>-</StyledButton>
            <Typography>{product.qty}</Typography>
            <StyledButton
              disabled={
                !cartInteractions ? false : listItem.qty - cartItem.qty === 0
              }
              onClick={addToCartHandler}
            >
              +
            </StyledButton>
          </Box>
        </Box>
      </Stack>
    );
  },
);
CheckoutItem.displayName = "CheckoutItem";
