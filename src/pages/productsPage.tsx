import { useState, useEffect } from "react";
import { tProduct } from "../types";
import { Product } from "../components/Product";
import { useCheckout } from "../contexts/CheckoutContext";
import { NavLayout } from "../layouts/nav";
import { LoaderLayout } from "../layouts/loader";
import { FooterLayout } from "../layouts/footer";
import toast from "react-hot-toast";

export function ProductsPage() {
  const [products, setProducts] = useState<tProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { addProducts } = useCheckout();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await fetch("https://fakestoreapi.com/products?limit=15");
        const res = await data.json();
        setProducts(res);
        setLoading(false);
      } catch (err) {
        console.error(err);
        toast.error("Ops! Something is wrong ...");
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  function onAddProduct(product: tProduct, quantity: number) {
    addProducts(product, quantity);
    toast.success(`${quantity} ${product.title} added in cart !`);
  }

  return (
    <>
      <div>
        <NavLayout />
      </div>
      <div className="flex justify-center items-center overflow-y-auto py-14">
        <div className="flex flex-wrap justify-center gap-4 ">
          {!loading ? (
            products.map((product) => {
              return (
                <Product
                  id={product.id}
                  image={product.image}
                  category={product.category}
                  price={product.price}
                  title={product.title}
                  description={product.description}
                  onAdd={onAddProduct}
                  key={product.id}
                />
              );
            })
          ) : (
            <LoaderLayout />
          )}
        </div>
      </div>
      <FooterLayout />
    </>
  );
}
