"use client";
import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // Navigate back to the previous page
  };

  return (
    <button
      onClick={handleBackClick}
      className="mt-10 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-all"
    >
      Back
    </button>
  );
}