import Head from "next/head";
import List from "../components/List";
import { ListContext, listReducer } from "@/features/context";
import { useReducer } from "react";

export default function Home() {
  const initialState = [
    {
      id: 0,
      name: "",
      quantity: null,
    },
  ];

  const [state, dispatch] = useReducer(listReducer, initialState);

  return (
    <>
      <Head>
        <title>Shoplister</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col items-center">
        <div className="text-4xl py-16 font-bold text-blue-100">SHOPLISTER</div>
        <div>
          <ListContext.Provider value={{ state, dispatch }}>
            <List />
          </ListContext.Provider>
        </div>
      </main>
      <footer className="text-blue-100 text-center fixed bottom-0 w-full text-xs">
        Developer by Alexsander Souza. | GitHub | LinkedIn | Portfolio
      </footer>
    </>
  );
}
