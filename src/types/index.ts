export interface tProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface tCheckoutProduct {
  quantity: number;
  product: tProduct;
}