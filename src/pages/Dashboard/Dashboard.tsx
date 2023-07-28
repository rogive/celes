import React, { ReactElement, useState, useMemo } from "react";

import Header from "../../components/Header";
import Body from "../../components/Body";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { filterProducts } from "../../utils/Products";

const DashboardContainer = ():ReactElement => {
  const { products, isFetchProductsLoading} = useFetchProducts();
  const [search, setSearch] = useState("");
  const productsFiltered = useMemo(
    () => filterProducts(products, search),
    [products, search]
  );

  return (
    <>
      <Header />
      <Body data={productsFiltered} />
    </>
  );
};

export default DashboardContainer;