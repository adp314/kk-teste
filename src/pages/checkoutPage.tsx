import { NavLayout } from "../layouts/nav";
import { FooterLayout } from "../layouts/footer";
import { useCheckout } from "../contexts/CheckoutContext";
import { useNavigate } from "react-router-dom";
import { FilledProduct } from "../components/FilledProduct";

export function CheckoutPage() {
  const navigate = useNavigate();
  const { products, Reset } = useCheckout();

  return (
    <>
      <div>
        <NavLayout />
      </div>
      <div className="h-screen w-full flex justify-center items-center py-16">
        <div className="h-full w-[40rem] rounded-lg bg-base-100 shadow-xl flex flex-col justify-between p-4">
          <div className="flex flex-col gap-5 overflow-y-auto p-8">
            {products.map(({ product, quantity }) => {
              return (
                <FilledProduct
                  key={product.id}
                  {...product}
                  quantity={quantity}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center text-white mt-8 pb-3">
            <button
              className="bg-red-900 hover:bg-red-800 w-28 h-12 rounded-lg"
              onClick={() => {
                Reset();
                navigate("/products");
              }}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
}
