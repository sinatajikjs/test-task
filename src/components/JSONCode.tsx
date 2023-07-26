interface IProps {
  elements: IElement[];
}

export default function JSONCode({ elements }: IProps) {
  return (
    <section className="absolute bottom-0 w-[calc(100%_-_200px)]">
      <h1 className="px-4 py-2 text-2xl font-semibold bg-gray-500 text-white">
        JSON
      </h1>
      <code>
        <pre className="whitespace-pre-wrap ">{JSON.stringify(elements)}</pre>
      </code>
    </section>
  );
}
