export const dynamic = 'force-dynamic';

import { BackButton } from '@/components/BackButton';
import { fetchWithDelay } from '@/utils/global';
import { Suspense } from 'react';

const Quotes = async () => {
  console.log("Streaming SSR: Fetching quote data...");
  
  // Fetching dummy quotes from a public API
  const res = await fetchWithDelay('https://dummyjson.com/quotes/random', {}, 2000);
  const quoteData = await res.json();
  
  console.log("Streaming SSR: Data fetched successfully");

  return (
    <div className="mt-10 font-bold text-xl text-center max-w-96">
      {quoteData ? `${quoteData.quote} - ${quoteData.author}` : "Loading..."}
    </div>
  );
};

export default function StreamingSSRPage() {
  console.log("Streaming SSR: Rendering page");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-red-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Streaming SSR</h1>
      <p className="text-lg text-center max-w-xl">
        This page streams server-side rendered content in chunks, providing a faster time to first byte.
      </p>
      <Suspense fallback={<div className="mt-10 font-bold text-xl text-center max-w-96">Loading....</div>}>
        <Quotes />
      </Suspense>

      <BackButton />
    </main>
  );
}
