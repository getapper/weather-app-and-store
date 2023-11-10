import React, { memo } from "react";
import { useProductCard } from "./index.hooks";
import Image, { StaticImageData } from "next/image";
import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  thumbnail: StaticImageData;
};

const StyledContainer = styled("div")({
  width: "464px",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#27343f",
  borderRadius: "10px",
  boxShadow: "8px 8px 12px -4px rgba(204,204,204,0.1)",
  "&:hover": {
    opacity: 0.9,
  },
});

const StyledImage = styled(Image)({
  "&:hover": { borderRadius: "10px" },
});

export const ProductCard = memo(
  ({ id, name, price, thumbnail }: ProductCardProps) => {
    const {} = useProductCard();

    return (
      <Link to={`/product-details/${id}`}>
        <StyledContainer>
          <StyledImage width={464} height={605} src={thumbnail} alt={name} />
          <Box textAlign="center" margin={2}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {name}
            </Typography>
            <Typography>{price}€</Typography>
          </Box>
        </StyledContainer>
      </Link>
    );
  },
);
ProductCard.displayName = "ProductCard";
