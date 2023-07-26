interface IProps {
  elements: IElement[];
  setElements: React.Dispatch<React.SetStateAction<IElement[]>>;
  setSelectedElem: React.Dispatch<React.SetStateAction<IElement | null>>;
}

export default function Designer({
  elements,
  setElements,
  setSelectedElem,
}: IProps) {
  const handleChange =
    (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newElements = elements.map((item) => {
        return item.id === id ? { ...item, value: e.target.value } : item;
      });
      setElements(newElements);
      setSelectedElem((prev) =>
        prev ? { ...prev, value: e.target.value } : prev
      );
    };

  const handleClick = (element: IElement) => (e: any) => {
    if (e.target.tagName === "BUTTON") return;
    setSelectedElem(element);
  };

  const handleDelete = (id: string) => () => {
    setElements((prev) => prev.filter((elem) => elem.id !== id));
    setSelectedElem(null);
  };

  return (
    <section className="flex-1">
      <h1 className="px-4 py-2 text-2xl font-semibold bg-gray-500 text-white">
        Designer
      </h1>
      <div className="grid xl:grid-cols-2 grid-cols-1 justify-items-start gap-8 p-6">
        {elements.map((element) => {
          return (
            <div
              key={element.id}
              onClick={handleClick(element)}
              className="flex gap-4 items-center w-max"
            >
              <label className="text-lg" htmlFor={element.id}>
                {element.label}
              </label>
              {element.type === "select" ? (
                <select name="" id="">
                  <option value="">hello</option>
                  <option value="">world</option>
                </select>
              ) : (
                <input
                  className={element.className}
                  id={element.id}
                  type={element.type}
                  required={element.required}
                  name={element.name}
                  value={element.value}
                  onChange={handleChange(element.id)}
                />
              )}
              <button
                className="text-red-600 text-2xl"
                onClick={handleDelete(element.id)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
