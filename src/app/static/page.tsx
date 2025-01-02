import { BackButton } from "@/components/BackButton";

export default async function StaticPage() {
  console.log("SSG: StaticPage component is rendering");
  // Fetch a dummy quote from DummyJSON API
  const res = await fetch('https://dummyjson.com/quotes/random');
  console.log("SSG: Fetch request sent, waiting for response...");
  const quoteData = await res.json();
  console.log("SSG: Data fetched successfully:", quoteData);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Static Site Generation (SSG)</h1>
      <p className="text-lg text-center max-w-xl">
        This page was statically generated at build time. The content here does not change until the next build
      </p>
      <div className="mt-10 font-bold text-xl text-center max-w-96">
        {quoteData ? `${quoteData.quote} - ${quoteData.author}` : "Loading..."}
      </div>

      <BackButton />
    </main>
  );
}
