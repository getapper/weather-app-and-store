import React, { memo } from "react";
import { useProductDetailsPage } from "./index.hooks";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Link } from "react-router-dom";
import { CartButton } from "@/components/CartButton";

type ProductDetailsPageProps = {};

const StyledButton = styled(Button)({
  color: "#0f1a24",
  background: "#d2dde2",
  width: 250,
  height: 50,
  "&:hover": {
    opacity: 0.9,
    background: "#d2dde2",
  },
});

export const ProductDetailsPage = memo(({}: ProductDetailsPageProps) => {
  const { product, addToCartHandler, cartItemQty } = useProductDetailsPage();

  return (
    <Container
      maxWidth={false}
      sx={{ background: "#0f1a24", height: "100vh", color: "#D2DDE2", p: 2 }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pb={4}
      >
        <Typography variant="h4" fontWeight={600}>
          Product Details
        </Typography>
        <CartButton />
      </Box>
      <Grid container px={20}>
        <Grid item xs={6} display="flex" justifyContent="center">
          <Image src={product.pdpImage} alt={product.name} width={600} />
        </Grid>
        <Grid item xs={6} display="flex" direction="column" alignItems="center">
          <Stack
            width="90%"
            height="fit-content"
            p={5}
            alignItems="flex-start"
            border="1px solid #d2dde2"
            sx={{ borderRadius: "10px" }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography fontSize={40}>{product.name}</Typography>
              <Typography>{product.price}€</Typography>
            </Box>
            <Typography>Mod. {product.sku}</Typography>
            <Box py={4}>
              <Typography fontSize={24} gutterBottom>
                Descrizione:
              </Typography>
              <Typography fontSize={18}>{product.description}</Typography>
            </Box>
            <Typography mb={8}>
              Disponibilità - {product.qty - cartItemQty} in stock
            </Typography>
            <Button
              disabled={product.qty - cartItemQty === 0}
              variant="outlined"
              sx={{
                color: "#d2dde2",
                alignSelf: "center",
                width: "400px",
                height: "60px",
                border: "1px solid #d2dde2",
              }}
              onClick={addToCartHandler}
            >
              Aggiungi al carrello
            </Button>
          </Stack>
          <Box display="flex" width="100%" justifyContent="space-evenly" my={8}>
            <Link to="/">
              <StyledButton variant="contained">
                Continua lo shopping
              </StyledButton>
            </Link>
            <Link to="/checkout">
              <StyledButton variant="contained">Vai al checkout</StyledButton>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
});

ProductDetailsPage.displayName = "ProductDetailsPage";
