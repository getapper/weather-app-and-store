import React, { memo } from "react";
import { useStoreHomepage } from "./index.hooks";
import { Container, Grid, Typography, Box } from "@mui/material";
import { ProductCard } from "@/components/ProductCard";
import { CartButton } from "@/components/CartButton";

type StoreHomepageProps = {};

export const StoreHomepage = memo(({}: StoreHomepageProps) => {
  const { productList } = useStoreHomepage();

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
        <CartButton />
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
