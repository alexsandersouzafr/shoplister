import Item, { ListContext } from "@/features/context";
import { useContext, useState } from "react";

type Props = {
  item: Item;
};

export default function ListItem({ item }: Props) {
  const { state, dispatch } = useContext(ListContext);

  return (
    <div className="flex text-lg gap-4 items-baseline">
      <div className="flex-auto">
        <input
          type="text"
          placeholder="item name"
          className="p-2 rounded-lg bg-blue-100  focus:border-blue-500"
          value={item.name}
          onChange={(e) => {
            dispatch({
              type: "edit",
              payload: {
                id: item.id,
                name: e.target.value,
                quantity: item.quantity,
              },
            });
          }}
        />
      </div>
      <div>
        <input
          type="number"
          className="p-2 rounded-lg w-32 bg-blue-50 focus:border-blue-500"
          value={item.quantity}
          onChange={(e) => {
            dispatch({
              type: "edit",
              payload: {
                id: item.id,
                name: item.name,
                quantity: parseInt(e.target.value),
              },
            });
          }}
        />
      </div>
      <button
        className="border-t-zinc-800 p-2 bg-cyan-900 rounded-lg"
        onClick={() => dispatch({ type: "delete", payload: item })}
      >
        🗑️
      </button>
    </div>
  );
}
