import { createContext, ReactNode, useState, useContext } from "react";
import { tProduct, tCheckoutProduct } from "../types";

const Checkout = createContext<{
  products: tCheckoutProduct[];
  addProducts: (product: tProduct, quantity: number) => void;
  Reset: () => void;
  totalItems: () => number;
  totalAmount: () => string;
  numOfProducts: number;
}>({
  products: [],
  addProducts: (product, quantity) => {},
  Reset: () => {},
  totalItems: () => 0,
  totalAmount: () => "",
  numOfProducts: 0,
});

export function CheckoutContext(props: { children: ReactNode }) {
  const [checkoutProducts, setCheckoutProducts] = useState<tCheckoutProduct[]>(
    []
  );

  function addProducts(product: tProduct, quantity: number) {
    const existingProduct = checkoutProducts.find(
      (p) => p.product.id === product.id
    );
    if (existingProduct) {
      setCheckoutProducts(
        checkoutProducts.map((p) =>
          p.product.id === product.id
            ? { ...p, quantity: p.quantity + quantity }
            : p
        )
      );
    } else {
      setCheckoutProducts([
        ...checkoutProducts,
        { quantity: quantity, product: product },
      ]);
    }
  }

  const numOfProducts = checkoutProducts.length;

  function totalAmount() {
    const total = checkoutProducts
      .map((p) => p.product.price * p.quantity)
      .reduce((prev, cur) => prev + cur, 0);
    return total.toFixed(2);
  }

  function totalItems() {
    const total = checkoutProducts
      .map((p) => p.quantity)
      .reduce((prev, cur) => prev + cur, 0);
    return total;
  }

  function Reset() {
    setCheckoutProducts([]);
  }

  return (
    <Checkout.Provider
      value={{
        products: checkoutProducts,
        addProducts,
        Reset,
        totalAmount,
        totalItems,
        numOfProducts,
      }}
    >
      {props.children}
    </Checkout.Provider>
  );
}

export const useCheckout = () => {
  const context = useContext(Checkout);
  if (context === undefined) {
    throw new Error("usecheckout must be used within a checkoutProvider.");
  }
  return context;
};
