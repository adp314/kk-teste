import { tProduct } from "../types";
import { useState } from "react";

type ProductProps = {
  onAdd: (p: tProduct, quantity: number) => void;
} & tProduct;

export function Product(props: ProductProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="card w-80 h-[28rem] bg-base-100 shadow-xl justify-between">
        <figure className="m-5">
          <img src={props.image} alt={props.category} className="h-full" />
        </figure>
        <div className="flex flex-col mx-5 overflow-y-auto">
          <div className="overflow-y-auto">
            <h2 className="card-title">{props.title}</h2>
            <p className="break-words">{props.description}</p>
          </div>
          <div className="card-actions flex-nowrap flex-row justify-between items-center mb-5 mt-3">
            <input
              type="number"
              className="input input-bordered w-28"
              value={quantity}
              min={1}
              onChange={(e) => {
                setQuantity(e.target.valueAsNumber);
              }}
            ></input>
            <p>{props.price} €</p>
            <button
              className="bg-neutral-700 text-white text-base flex justify-center items-center w-16 h-12 rounded-lg uppercase hover:bg-neutral-500 shadow-lg"
              onClick={() => {
                props.onAdd(
                  {
                    id: props.id,
                    category: props.category,
                    description: props.description,
                    image: props.image,
                    price: props.price,
                    title: props.title,
                  },
                  quantity
                );
              }}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
