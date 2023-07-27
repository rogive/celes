import React, { ReactElement, useState, useEffect } from "react";

import Header from "../../components/Header";
import Body from "../../components/Body";
import { useFetchProducts } from "../../hooks/useFetchProducts";

const DashboardContainer = ():ReactElement => {
  const { products, isFetchProductsLoading} = useFetchProducts();

  return (
    <>
      <Header />
      <Body data={products} />
    </>
  );
};

export default DashboardContainer;