import { IProduct } from "../models/Product";

export const filterProducts = (products: IProduct[] = [], search: string) => {
  return products.filter((product) => product.sku?.includes(search) || product.name?.includes(search));
};