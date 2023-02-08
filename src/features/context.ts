import { Dispatch, createContext } from "react";

export default interface Item {
  id: number;
  name: string;
  quantity: number | null;
}

interface ContextType {
  state: Item[];
  dispatch: Dispatch<Action>;
}

export const ListContext = createContext<ContextType>({} as ContextType);

interface Action {
  type: "add" | "edit" | "delete";
  payload?: Item;
}

export function listReducer(state: Item[], action: Action): Item[] {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Math.random(),
          name: "",
          quantity: null,
        },
      ];
    case "edit":
      if (action.payload === null) return state;
      return state.map((item) =>
        item.id === action.payload?.id ? { ...state, ...action.payload } : item
      );
    case "delete":
      if (state.length === 1) return state;
      return state.filter((item) => item.id !== action.payload?.id);
    default:
      throw new Error();
  }
}
