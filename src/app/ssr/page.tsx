import { BackButton } from "@/components/BackButton";

export default async function SSRPage() {
  console.log("SSR: Starting data fetch from API...");

  // Fetch a dummy quote from DummyJSON API
  const res = await fetch('https://dummyjson.com/quotes/random');
  console.log("SSR: Fetch request sent, waiting for response...");

  const quoteData = await res.json();
  console.log("SSR: Data fetched successfully:", quoteData);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Server-Side Rendering (SSR)</h1>
      <p className="text-lg text-center max-w-xl">
        This page is rendered on the server for every request, ensuring the content is always fresh.
      </p>
      <div className="mt-10 font-bold text-xl text-center max-w-96">
        {quoteData ? `${quoteData.quote} - ${quoteData.author}` : "Loading..."}
      </div>

      <BackButton />
    </main>
  );
}
