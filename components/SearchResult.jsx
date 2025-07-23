import Link from "next/link";

export default function SearchResult({ results, term }) {
  return (
    <div class="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
      <p class="!text-lg">
        Showing results for
        <span class="font-semibold">"{term}":</span>
      </p>
      <ul role="list" class="divide-y divide-gray-100 [&>*]:py-2">
        {results.map((result) => (
          <li key={result.id} class="">
            <Link href={`/docs/${result.id}`} class="transition-all hover:text-emerald-600">
              {result.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
