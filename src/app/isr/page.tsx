import { BackButton } from "@/components/BackButton";

export default async function ISRPage() {
  console.log("ISR: Starting to fetch data...");

  // Fetch data with the revalidate option for ISR
  const res = await fetch('https://dummyjson.com/quotes/random', {
    next: { revalidate: 10 }, // Revalidate the page every 10 seconds
  });

  console.log("ISR: Fetch request sent, waiting for response...");

  const quoteData = await res.json();
  console.log("ISR: Data fetched successfully:", quoteData);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Incremental Static Regeneration (ISR)</h1>
      <p className="text-lg text-center max-w-xl">
        This page is statically generated but will revalidate and update every 10 seconds.
      </p>
      <div className="mt-10 font-bold text-xl text-center max-w-96">
        {quoteData ? `${quoteData.quote} - ${quoteData.author}` : "Loading..."}
      </div>

      <BackButton />
    </main>
  );
}
