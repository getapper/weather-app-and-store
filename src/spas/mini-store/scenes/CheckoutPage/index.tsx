import React, { memo } from "react";
import { useCheckoutPage } from "./index.hooks";
import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CheckoutItem } from "@/components/CheckoutItem";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

type CheckoutPageProps = {};

const StyledButton = styled(Button)({
  color: "#0f1a24",
  background: "#d2dde2",
  width: 300,
  height: 50,
  "&:hover": {
    opacity: 0.9,
    background: "#d2dde2",
  },
  "&:disabled": {
    opacity: 0.2,
    color: "#0f1a24",
    background: "#d2dde2",
  },
});

const StyledTextField = styled(TextField)({
  width: "60%",
  color: "#d2dde2",
});

export const CheckoutPage = memo(({}: CheckoutPageProps) => {
  const {
    cartList,
    shippingAddress,
    billingAddress,
    name,
    paymentMethod,
    changeShippingHandler,
    changeCVVHandler,
    changeExDateHandler,
    changeBillingHandler,
    changeCardHandler,
    changeNameHandler,
    isDisabled,
    checkoutHandler,
  } = useCheckoutPage();

  return (
    <Container
      maxWidth={false}
      sx={{ background: "#0f1a24", height: "100vh", color: "#D2DDE2", p: 4 }}
    >
      <Stack alignItems="center">
        <Typography variant="h4" mb={2}>
          Checkout Page
        </Typography>
        {cartList.map((prod) => (
          <CheckoutItem key={prod.id} product={prod} />
        ))}
        <Typography fontWeight={600} my={2}>
          Total amount:{" "}
          {cartList
            .map((el) => el.qty * el.price)
            .reduce((acc, curr) => acc + curr, 0)}
          €
        </Typography>
        <Grid container width="80%">
          <Grid
            item
            xs={6}
            display="flex"
            direction="column"
            alignItems="center"
            rowGap={2}
          >
            <StyledTextField
              label="Nome titolare carta"
              value={name}
              onChange={(e) => changeNameHandler(e)}
              inputProps={{
                style: {
                  border: "1px solid #d2dde2",
                  color: "#d2dde2",
                  borderRadius: 5,
                },
              }}
              InputLabelProps={{ sx: { color: "#d2dde2" } }}
            />
            <StyledTextField
              label="Numero carta"
              onChange={(e) => changeCardHandler(e)}
              value={paymentMethod.cardNumber}
              inputProps={{
                style: {
                  border: "1px solid #d2dde2",
                  color: "#d2dde2",
                  borderRadius: 5,
                },
              }}
              InputLabelProps={{ sx: { color: "#d2dde2" } }}
            />
            <StyledTextField
              label="Data di scadenza"
              onChange={(e) => changeExDateHandler(e)}
              value={paymentMethod.expirationDate}
              inputProps={{
                style: {
                  border: "1px solid #d2dde2",
                  color: "#d2dde2",
                  borderRadius: 5,
                },
              }}
              InputLabelProps={{ sx: { color: "#d2dde2" } }}
            />
            <StyledTextField
              label="CVV"
              onChange={(e) => changeCVVHandler(e)}
              value={paymentMethod.cvv}
              inputProps={{
                style: {
                  border: "1px solid #d2dde2",
                  color: "#d2dde2",
                  borderRadius: 5,
                },
              }}
              InputLabelProps={{ sx: { color: "#d2dde2" } }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            direction="column"
            alignItems="center"
            rowGap={2}
          >
            <StyledTextField
              label="Indirizzo di spedizione"
              onChange={(e) => changeShippingHandler(e)}
              value={shippingAddress}
              inputProps={{
                style: {
                  border: "1px solid #d2dde2",
                  color: "#d2dde2",
                  borderRadius: 5,
                },
              }}
              InputLabelProps={{ sx: { color: "#d2dde2" } }}
            />
            <StyledTextField
              label="Indirizzo di fatturazione"
              onChange={(e) => changeBillingHandler(e)}
              value={billingAddress}
              inputProps={{
                style: {
                  border: "1px solid #d2dde2",
                  color: "#d2dde2",
                  borderRadius: 5,
                },
              }}
              InputLabelProps={{ sx: { color: "#d2dde2" } }}
            />
            <Stack pt={3} rowGap={2} alignItems="center">
              <StyledButton
                onClick={checkoutHandler}
                disabled={isDisabled}
                variant="contained"
              >
                Conferma ordine
              </StyledButton>
              <Link to="/">
                <Typography>
                  <u>Torna alla Home</u>
                </Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
});

CheckoutPage.displayName = "CheckoutPage";
