type PageHeadingProps = {
  text: string;
};

export default function PageHeading({ text }: PageHeadingProps) {
  return (
    <h2
      className="text-4xl pt-6 font-semibold m-0 text-center
        md:text-6xl md:pt-0"
    >
      {text}
    </h2>
  );
}
