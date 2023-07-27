import { IProduct } from "./Product";

export interface ProductDataSource {
  getProducts(): Promise<IProduct[]>;
};