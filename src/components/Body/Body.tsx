import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';

import { IProduct } from "../../models/Product";

import "./Body.scss";

const Body = ({
  data,
}: {
  data: IProduct[],
}) => {

  return (
    <Box className="body">
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
            {data.map((product: IProduct) => (
                <TableRow
                  key={product.id}
                >
                  <TableCell align="center">{product.sku}</TableCell>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.inventoryQuantity}</TableCell>
                  <TableCell align="center">{product.inventoryQuantity}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Body;