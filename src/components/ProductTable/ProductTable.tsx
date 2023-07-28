import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { IProduct } from "../../models/Product";

import "./ProductTable.scss";

const ProductTable = (
  {
    data
  }: {
    data: IProduct[]
  }
) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="product table">
        <TableHead>
          <TableRow>
            <TableCell align="center">sku id</TableCell>
            <TableCell align="center">product name</TableCell>
            <TableCell align="center">current stock level</TableCell>
            <TableCell align="center">recommended re-order level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item: IProduct) => (
              <TableRow
                key={item.id}
              >
                <TableCell align="center">{item.sku}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.inventoryQuantity}</TableCell>
                <TableCell align="center">{item.inventoryQuantity}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;