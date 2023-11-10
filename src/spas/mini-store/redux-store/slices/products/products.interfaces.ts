import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  description: string;
  sku: string;
  price: number;
  thumbnail: StaticImageData;
  pdpImage: StaticImageData;
  qty: number;
}

export interface Order {
  id: number;
  fullName: string;
  paymentMethod: { cardNumber: string; expirationDate: string; cvv: number };
  shippingAddress: string;
  billingAddress: string;
  products: Product[];
}

export interface ProductsState {
  list: Product[];
  cart: Product[];
  orders: Order[];
}
