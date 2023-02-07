import ListItem from "./ListItem";
import { ListContext } from "../features/context";
import { useContext } from "react";

export default function List() {
  const { state, dispatch } = useContext(ListContext);
  return (
    <div className="grid gap-4 transition-all">
      {state.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}

      <button
        className="p-4 bg-blue-500 text-white rounded-lg"
        onClick={() => dispatch({ type: "add" })}
      >
        Add Item
      </button>
    </div>
  );
}
