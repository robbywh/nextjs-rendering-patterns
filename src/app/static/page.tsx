import { BackButton } from "@/components/BackButton";

export default function StaticPage() {
  console.log("SSG: StaticPage component is rendering");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Static Site Generation (SSG)</h1>
      <p className="text-lg text-center max-w-xl">
        This page was statically generated at build time. The content here does not change until the next build.
      </p>

      <BackButton />
    </main>
  );
}
