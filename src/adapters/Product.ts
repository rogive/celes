import { IProduct, IProductAPI } from "../models/Product";

export const formatProductsFromAPI = (productsAPI: IProductAPI[]): IProduct[] => {
  const products: IProduct[] = [];
  productsAPI.forEach((productAPI) => {
    (productAPI.variants || []).forEach((variant) => {
      products.push({
        id: variant.id,
        sku: variant.sku,
        name: productAPI.title,
        inventoryQuantity: variant.inventory_quantity,
        recommendedReOrderedLevel: variant.inventory_quantity,
      });
    });
  });
  return products;
};