import { tCheckoutProduct } from "../types";

export function FilledProduct(
  props: tCheckoutProduct["product"] & {
    quantity: tCheckoutProduct["quantity"];
  }
) {
  const { quantity, ...product } = props;

  return (
    <div className="flex justify-start items-center w-full h-full bg-base-100 rounded-xl shadow-md ">
      <figure>
        <img
          className="w-24 h-24 m-4"
          src={product.image}
          alt={product.category}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>Price : {product.price} €</p>
        <p>Quantity : {quantity}</p>
      </div>
    </div>
  );
}
