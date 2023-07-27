import { ProductDataSource } from "../models/ProductDataSource";
import { IProduct } from "../models/Product";

export class ProductRepository {
  datasource: ProductDataSource;

  constructor(datasource: ProductDataSource) {
    this.datasource = datasource;
  }

  async getProducts(): Promise<IProduct[]> {
    return await this.datasource.getProducts();
  }
};