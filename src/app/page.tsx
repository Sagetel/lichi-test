import Cards from "../../components/cards";
export default function Home() {
  return (
    <main className="p-3 max-w-7xl container ">
      <h1 className="text-3xl sm:text-3xl xl:text-4xl mb-2 font-semibold">Мой блог</h1>
      <Cards />
    </main>
  );
}
