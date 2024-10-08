import { BackButton } from "@/components/BackButton";

export const config = {
  runtime: 'edge',
};

export default async function EdgePage() {
  console.log("Edge Rendering: Fetching quote data...");

  // Fetching dummy quotes from a public API
  const res = await fetch('https://dummyjson.com/quotes/random');
  const quoteData = await res.json();
  
  console.log("Edge Rendering: Data fetched successfully");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pink-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Edge Rendering</h1>
      <p className="text-lg text-center max-w-xl">
        This page is rendered at the edge, closer to the user, for faster response times.
      </p>
      <div className="mt-10 font-bold text-xl text-center max-w-96">
        {quoteData ? `${quoteData.quote} - ${quoteData.author}` : "Loading..."}
      </div>

      <BackButton />
    </main>
  );
}
