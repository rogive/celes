import { useEffect, useState } from "react";

import { IProduct } from "../models/Product";
import { PRODUCTS_MOCK } from "../utils/mocks/productsMock";
import { getProducts } from "../services/Products";
import { formatProductsFromAPI } from "../adapters/Product";

export const useFetchProducts = (initialState: IProduct[] = []) => {
  const [products, setProducts] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async() => {
    setIsLoading(true);
    try {
      const products = await getProducts();
      setProducts(products);
      setIsLoading(false);
    } catch(error: any) {
      // TODO: ADD some notification
      console.log({ error });
      setIsLoading(false);
    };
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products: products.length ? products : formatProductsFromAPI(PRODUCTS_MOCK.products),
    isFetchProductsLoading: isLoading,
  };
};