import { Reviews } from "./reviews";
import { SimilarProducts } from "./similar-products";

export interface Product {
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  favorite: boolean;
  similarProducts?: SimilarProducts[];
  reviews: Reviews[];
}
