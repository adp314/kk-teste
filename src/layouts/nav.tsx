import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCheckout } from "../contexts/CheckoutContext";

export function NavLayout() {
  const { totalItems, totalAmount } = useCheckout();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-4 text-white bg-black drop-shadow-lg">
      <div className="w-full flex flex-wrap justify-between items-end px-40">
        <div className="flex justify-start items-end gap-2">
          <Link to="/products">
            <h1 className="w-full uppercase text-4xl font-bold tracking-widest">
              Kuanto Kusta
            </h1>
          </Link>
          <span className="italic text-white text-opacity-50 w-36">
            technical test
          </span>
        </div>
        <div className="flex justify-start items-end gap-2">
          <p className="text-lg">({totalAmount()} €)</p>
          <p className="text-2xl">{totalItems() === 0 ? null : totalItems()}</p>
          <Link to="/checkout">
            <FaShoppingCart className="text-3xl cursor-pointer text-neutral-200 hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
