import React from "react";
import {
  Box,
} from '@mui/material';

import SearchBar from "../SearchBar/SearchBar";
import { IProduct } from "../../models/Product";
import { useFilterBySearch } from "../../hooks/useFilterBySearch";

import "./Body.scss";
import ProductTable from "../ProductTable/ProductTable";

const Body = ({
  data,
}: {
  data: IProduct[],
}) => {
  const { search, setSearch, dataFiltered } = useFilterBySearch(data);

  const handleChange = (
    event: { target: { value: string }}
  ) => {
    const { target: { value } } = event;
    setSearch(value);
  };

  return (
    <Box className="body">
      <SearchBar
        id="dashboard-search-bar"
        label="Search"
        variant="outlined"
        value={search}
        onChange={handleChange}
      />
      <ProductTable
        data={dataFiltered}
      />
    </Box>
  );
};

export default Body;