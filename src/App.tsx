import Designer from "./components/Designer";
import SideBar from "./components/SideBar";
import { useState } from "react";

export default function App() {
  const [elements, setElements] = useState<IElement[]>([]);

  return (
    <main className="flex">
      <SideBar setElements={setElements} />
      <Designer elements={elements} />
    </main>
  );
}
