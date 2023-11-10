import React, { memo } from "react";
import { useStoreHomepage } from "./index.hooks";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { ProductCard } from "@/components/ProductCard";
import CartIcon from "@mui/icons-material/LocalMallOutlined";
import { Link } from "react-router-dom";

type StoreHomepageProps = {};

export const StoreHomepage = memo(({}: StoreHomepageProps) => {
  const { productList, cartItemsNumber } = useStoreHomepage();

  return (
    <Container
      maxWidth={false}
      sx={{ background: "#0f1a24", height: "100vh", color: "#D2DDE2", p: 4 }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <Typography variant="h2">SHOP</Typography>
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
      </Box>
      <Grid container columns={10}>
        {productList.map(({ id, name, price, thumbnail }) => (
          <Grid
            item
            xs={2.5}
            key={id}
            sx={{
              "&:hover": { border: "1px solid #D2DDE2", borderRadius: "10px" },
            }}
          >
            <ProductCard
              id={id}
              name={name}
              price={price}
              thumbnail={thumbnail}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
});

StoreHomepage.displayName = "StoreHomepage";
