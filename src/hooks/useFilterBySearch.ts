import { useMemo, useState } from "react";

import { IProduct, IProductsFiltered } from "../models/Product";
import { filterProducts } from "../utils/Products";

export const useFilterBySearch = (data: IProduct[] = []): IProductsFiltered => {
  const [search, setSearch] = useState("");

  const dataFiltered = useMemo(
    () => filterProducts(data, search),
    [data, search]
  );

  return {
    search,
    setSearch,
    dataFiltered,
  };
};