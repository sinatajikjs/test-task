interface IProps {
  elements: IElement[];
}

export default function Designer({ elements }: IProps) {
  return (
    <section className="flex-1">
      <h1 className="px-4 py-2 text-2xl font-semibold bg-gray-500 text-white">
        Designer
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-start gap-8 p-6">
        {elements.map((element) => {
          return (
            <div className="flex gap-2 items-center w-max">
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
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
