import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail: StaticImageData;
  qty: number;
}

export interface ProductsState {
  list: Product[];
  cart: Product[];
}
