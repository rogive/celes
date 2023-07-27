export interface IVariant {
  id: number;
  product_id: number;
  title: string;
  price: string;
  sku: string;
}

export interface IProduct {
  id: number;
  title: string;
  body_html: string;
  variants: IVariant[];
}