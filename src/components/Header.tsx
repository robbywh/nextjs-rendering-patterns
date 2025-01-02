export function Header({ title }: {title: string}) {
  console.log("Static Header...");
  return (
    <header className="bg-pink-500 text-white p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
  );
}
