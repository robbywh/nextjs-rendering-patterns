export const experimental_ppr = true; // Enable Partial Prerendering

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackButton } from "@/components/BackButton";

export default async function PprPage() {
  console.log("Partial Prerendering: Rendering the Quotes Dashboard...");

  // Fetch dynamic (Cached for 10 seconds)
  const quotes = await fetch("https://dummyjson.com/quotes/random/3", {
    next: { revalidate: 10 }, // Cache for 10 seconds
  });
  const bestQuotes = await quotes.json();

  // Fetch dynamic (Always fetch fresh data)
  const usersRes = await fetch("https://randomuser.me/api/?results=3", {
    cache: "no-store", // No cache, fetch fresh data
  });
  const bestUsers = await usersRes.json();

  console.log("Quotes fetched successfully");

  return (
    <main className="flex flex-col items-center min-h-screen bg-pink-500">
      {/* Static Header */}
      <Header title="Qoutes Dashboard" />

      {/* Dynamic Content Section */}
      <section className="p-8">
        {/*Best Quotes (Partial Prerendered) */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Best Quotes</h2>
          <div className="grid grid-cols-3 gap-4">
            {bestQuotes.map((data: any) => (
              <div
                key={data.id}
                className="p-6 bg-white rounded shadow-md flex flex-col items-center"
              >
                <h3 className="font-bold">{data.quote}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Best Users (Fully Dynamic) */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Best Users</h2>
          <ul className="bg-white p-6 rounded shadow-md">
            {bestUsers.results.map((user: any, index: number) => (
              <li
                key={index}
                className="flex justify-between py-2 border-b last:border-none"
              >
                <span>
                  <strong>Name:</strong> {user.name.first} {user.name.last}
                </span>
                <span>
                  <strong>Email:</strong> {user.email}
                </span>
                <span>
                  <strong>Location:</strong> {user.location.city},{" "}
                  {user.location.country}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Static Footer */}
      <Footer />
      <BackButton />
    </main>
  );
}
