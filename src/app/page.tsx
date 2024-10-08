import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <h1 className="text-4xl font-bold mb-12">Rendering Patterns in Next.js</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl px-4">
        <Link href="/static" className="block bg-blue-500 text-white text-center py-6 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-all">
          Static Rendering (SSG)
        </Link>

        <Link href="/isr" className="block bg-green-500 text-white text-center py-6 px-4 rounded-lg shadow-lg hover:bg-green-600 transition-all">
          Incremental Static Regeneration (ISR)
        </Link>

        <Link href="/ssr" className="block bg-yellow-500 text-white text-center py-6 px-4 rounded-lg shadow-lg hover:bg-yellow-600 transition-all">
          Server-Side Rendering (SSR)
        </Link>

        <Link href="/csr" className="block bg-purple-500 text-white text-center py-6 px-4 rounded-lg shadow-lg hover:bg-purple-600 transition-all">
          Client-Side Rendering (CSR)
        </Link>

        <Link href="/streaming" className="block bg-red-500 text-white text-center py-6 px-4 rounded-lg shadow-lg hover:bg-red-600 transition-all">
          Streaming SSR
        </Link>

        <Link href="/edge" className="block bg-pink-500 text-white text-center py-6 px-4 rounded-lg shadow-lg hover:bg-pink-600 transition-all">
          Edge Rendering
        </Link>

        <Link href="/rsc" className="block bg-indigo-500 text-white text-center py-6 px-4 rounded-lg shadow-lg hover:bg-indigo-600 transition-all">
          React Server Components
        </Link>
      </div>
    </main>
  );
}
