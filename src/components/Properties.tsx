const tableKeys = [
  {
    label: "ID",
    value: "id",
  },
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Class",
    value: "className",
  },
  {
    label: "Required",
    value: "required",
  },
  {
    label: "Value",
    value: "value",
  },
  {
    label: "Label",
    value: "label",
  },
];

interface IProps {
  selectedElem: IElement | null;
  setElements: React.Dispatch<React.SetStateAction<IElement[]>>;
  setSelectedElem: React.Dispatch<React.SetStateAction<IElement | null>>;
}

export default function Properties({
  selectedElem,
  setElements,
  setSelectedElem,
}: IProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedElem) return;
    setSelectedElem((prev) =>
      prev ? { ...prev, [e.target.name]: e.target.value } : prev
    );

    setElements((prev) =>
      prev.map((element) => {
        return element.id === selectedElem.id
          ? { ...element, [e.target.name]: e.target.value }
          : element;
      })
    );
  };

  const handleToggle = () => {
    if (!selectedElem) return;
    setSelectedElem((prev) =>
      prev ? { ...prev, required: !prev.required } : prev
    );

    setElements((prev) =>
      prev.map((element) => {
        return element.id === selectedElem.id
          ? { ...element, required: !element.required }
          : element;
      })
    );
  };

  return (
    <section className="">
      <h1 className="p-2 text-2xl font-semibold bg-gray-500 text-white">
        Properties
      </h1>
      <table className="w-full border border-gray-400 text-sm">
        {tableKeys.map((tKey) => {
          return (
            <tbody key={tKey.value}>
              <tr >
                <td className="border border-gray-400 px-2 py-1 min-w-[130px] text-lg font-medium text-gray-600">
                  {tKey.label}
                </td>
                <td className="border border-gray-400 min-w-[130px] text-lg font-medium text-gray-600">
                  {tKey.value === "required" && selectedElem ? (
                    <button
                      onClick={handleToggle}
                      className="px-2 mx-1 bg-blue-600 text-white rounded-xl"
                    >
                      {selectedElem ? String(selectedElem.required) : ""}
                    </button>
                  ) : (
                    <input
                      type="text"
                      name={tKey.value}
                      className="px-2 py-1"
                      onChange={handleChange}
                      value={
                        selectedElem ? (selectedElem as any)[tKey.value] : ""
                      }
                    />
                  )}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </section>
  );
}
