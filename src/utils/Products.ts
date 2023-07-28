import { IProduct } from "../models/Product";

export const filterProducts = (products: IProduct[] = [], search: string) => {
  return products.filter((product) =>
    product.sku?.toLowerCase().includes(search) || product.name?.toLowerCase().includes(search)
  );
};