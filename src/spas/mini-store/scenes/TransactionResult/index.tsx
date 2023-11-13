import React, { memo } from "react";
import { useTransactionResult } from "./index.hooks";
import { Container, Stack, Typography, Grid, Box, Button } from "@mui/material";
import { CheckoutItem } from "@/components/CheckoutItem";
import { Link } from "react-router-dom";

type TransactionResultProps = {};

export const TransactionResult = memo(({}: TransactionResultProps) => {
  const { order } = useTransactionResult();

  return (
    <Container
      maxWidth={false}
      sx={{ background: "#0f1a24", height: "100vh", color: "#D2DDE2", p: 4 }}
    >
      <Stack alignItems="center" rowGap={2}>
        <Typography variant={"h3"}>
          La tua transazione è andata a buon fine, {order.fullName}
        </Typography>
        <Typography variant="h6">
          Ecco a te un riepilogo dell&apos;ordine
        </Typography>
        <Grid container color="#0f1a24" py={10}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {order.products.map((prod) => (
              <CheckoutItem
                key={prod.id}
                product={prod}
                cartInteractions={false}
              />
            ))}
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              width="60%"
              height="fit-content"
              bgcolor="white"
              padding={2}
              borderRadius="5px"
            >
              <Typography fontSize={16} fontWeight={600}>
                Ordine n: {order.id}
              </Typography>
              <Typography fontSize={16} fontWeight={600}>
                Destinatario: {order.fullName}
              </Typography>
              <Typography fontSize={16} fontWeight={600}>
                Indirizzo di spedizione: {order.shippingAddress}
              </Typography>
              <Typography fontSize={16} fontWeight={600}>
                Indirizzo di fatturazione: {order.billingAddress}
              </Typography>
              <Typography fontSize={16} fontWeight={600}>
                Metodo di pagamento: {order.paymentMethod.cardNumber}
              </Typography>
              <Typography fontSize={16} fontWeight={600}>
                Totale:{" "}
                {order.products
                  .map((el) => el.price * el.qty)
                  .reduce((acc, curr) => acc + curr, 0)}
                €
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Link to="/">
          <Button
            variant="outlined"
            sx={{
              color: "#d2dde2",
              alignSelf: "center",
              width: "400px",
              height: "60px",
              border: "1px solid #d2dde2",
            }}
          >
            Torna alla home
          </Button>
        </Link>
      </Stack>
    </Container>
  );
});

TransactionResult.displayName = "TransactionResult";
