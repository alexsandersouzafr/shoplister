import Item, { ListContext } from "@/features/context";
import { useContext } from "react";

type Props = {
  item: Item;
};

export default function ListItem({ item }: Props) {
  const { dispatch } = useContext(ListContext);

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="item name"
        className="p-2 rounded-lg bg-blue-100 w-32 md:w-64"
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
      <input
        type="number"
        className="p-2 rounded-lg w-12 md:w-16 bg-blue-50"
        value={item.quantity}
        placeholder="0"
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
      <button
        className="border-t-zinc-800 p-2 bg-cyan-900 rounded-lg "
        onClick={() => dispatch({ type: "delete", payload: item })}
      >
        🗑️
      </button>
    </div>
  );
}
