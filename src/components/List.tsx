import ListItem from "./ListItem";
import { ListContext } from "../features/context";
import { useContext } from "react";

export default function List() {
  const { state, dispatch } = useContext(ListContext);
  return (
    <>
      <div className="grid gap-4 transition-all max-h-[50vh] md:max-h-[60vh] overflow-y-auto scrollbar-hide scroll-smooth">
        {state.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>

      <button
        className="p-4 mt-4 w-full bg-blue-500 text-white rounded-lg"
        onClick={() => dispatch({ type: "add" })}
      >
        Add Item
      </button>
    </>
  );
}
