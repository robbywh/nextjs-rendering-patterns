import Link from 'next/link';
export function BackButton() {
  return (
    <Link  className="mt-10 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-all" href="/">
      Back
    </Link>
  );
}