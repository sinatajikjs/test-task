const listElements = [
  { label: "TextBox", type: "text", className: "textField__input" },
  { label: "CheckBox", type: "checkbox", className: "checkBox__input" },
  { label: "ComboBox", type: "select", className: "" },
  { label: "File Upload", type: "file", className: "" },
  { label: "Radio Button", type: "radio", className: "" },
];

interface IProps {
  setElements: React.Dispatch<React.SetStateAction<IElement[]>>;
  setSelectedElem: React.Dispatch<React.SetStateAction<IElement | null>>;
}

export default function SideBar({ setElements, setSelectedElem }: IProps) {
  const handleClick = (listElement: IListElement) => () => {
    const element = {
      ...listElement,
      id: String(Date.now()),
      name: "",
      value: "",
      required: true,
    };

    setElements((prev) => [...prev, element]);
    setSelectedElem(element);
  };

  return (
    <section className="w-max border-r border-gray-400 h-screen">
      <h1 className="px-4 py-2 text-2xl font-semibold bg-gray-500 text-white">
        Toolbar
      </h1>
      <ul className="flex flex-col justify-center">
        {listElements.map((element) => {
          return (
            <li
              key={element.type}
              onClick={handleClick(element)}
              className="px-4 py-2 text-xl border-b border-gray-400 cursor-pointer hover:bg-gray-200 transition"
            >
              {element.label}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
