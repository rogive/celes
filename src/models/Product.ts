export interface IVariant {
  id: number;
  product_id: number;
  title: string;
  price: string;
  sku: string;
  inventory_quantity: number;
}

export interface IProductAPI {
  id: number;
  title: string;
  body_html: string;
  variants: IVariant[];
}

export interface IProductAPIResponse {
  products: IProductAPI[];
}

export interface IProduct {
  id: number;
  sku: string;
  name: string;
  inventoryQuantity: number;
  recommendedReOrderedLevel: number | null;
}