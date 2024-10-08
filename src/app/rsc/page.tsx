import { BackButton } from "@/components/BackButton";

export default async function RSCPage() {
  console.log("RSC: Fetching quote data...");

  // Fetching dummy quotes from a public API
  const res = await fetch('https://dummyjson.com/quotes/random', {
    headers: {
      'Cache-Control': 'no-cache',
    },
  });
  const quoteData = await res.json();
  
  console.log("RSC: Data fetched successfully");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-indigo-500 text-white">
      <h1 className="text-4xl font-bold mb-6">React Server Components (RSC)</h1>
      <p className="text-lg text-center max-w-xl">
        This page uses React Server Components, which allow rendering parts of the UI on the server with reduced client-side JavaScript.
      </p>
      <div className="mt-10 font-bold text-xl text-center max-w-96">
        {quoteData ? `${quoteData.quote} - ${quoteData.author}` : "Loading..."}
      </div>

      <BackButton />
    </main>
  );
}
