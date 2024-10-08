"use client";
import { useEffect, useState } from 'react'; 
import { BackButton } from '@/components/BackButton';
import { Quote } from '@/types/quote';

export default function CSRPage() {
  const [quoteData, setQuoteData] = useState<Quote>();
  useEffect(() => {
    console.log("CSR: Component mounted - Fetching data");

    fetch('https://dummyjson.com/quotes/random')
      .then((response) => response.json())
      .then((data) => {
        console.log("CSR: Data fetched:", data);
        setQuoteData(data);
      })
      .catch((error) => {
        console.error("CSR: Error fetching data:", error);
      });

    return () => {
      console.log("CSR: Component unmounted");
    };
  }, []);

  console.log("CSR: Component rendering");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Client-Side Rendering (CSR)</h1>
      <p className="text-lg text-center max-w-xl">
        This page is rendered on the client side after the JavaScript is loaded, ensuring dynamic interactions.
      </p>
      <div className="mt-10 font-bold text-xl text-center max-w-96">
        {quoteData ? `${quoteData.quote} - ${quoteData.author}` : "Loading..."}
      </div>

      <BackButton />
    </main>
  );
}
