import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import { IProduct } from "../models/Product";
import { Http } from "../services/Http";
import { PRODUCTS_MOCK } from "../utils/mocks/productsMock"

export const useFetchProducts = (initialState: IProduct[] = PRODUCTS_MOCK.products) => {
  const [products, setProducts] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Http.get<IProduct[]>("/").then((data: AxiosResponse<IProduct[], any>) => {
      // TODO: Solve CORS Problem
      // setProducts(data);
      setIsLoading(false);
    }).catch((error: any) => {
      console.log({ error });
      setIsLoading(false);
    });
  }, []);

  return {
    products: products?.slice(-10),
    isFetchProductsLoading: isLoading,
  };
};