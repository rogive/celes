import { Http } from "../services/Http";
import { IProductAPIResponse } from "../models/Product";
import { formatProductsFromAPI } from "../adapters/Product";

export const getProducts = async () => {
  try {
    const products = await Http.get<IProductAPIResponse>("/").then(
      response => formatProductsFromAPI(response.data?.products)
    );
    return products;
  } catch (error: any) {
    console.log({ error });
    throw error;
  };
};