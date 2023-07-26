import Designer from "./components/Designer";
import Properties from "./components/Properties";
import SideBar from "./components/SideBar";
import { useState } from "react";

export default function App() {
  const [elements, setElements] = useState<IElement[]>([]);
  const [selectedElem, setSelectedElem] = useState<IElement | null>(null);

  return (
    <main className="flex">
      <SideBar setSelectedElem={setSelectedElem} setElements={setElements} />
      <Designer
        setSelectedElem={setSelectedElem}
        elements={elements}
        setElements={setElements}
      />
      <Properties
        setSelectedElem={setSelectedElem}
        selectedElem={selectedElem}
        setElements={setElements}
      />
    </main>
  );
}
