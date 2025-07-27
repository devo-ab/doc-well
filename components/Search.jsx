"use client";
import useDebounce from "@/hooks/useDebounce";
import Image from "next/image";
import { useState } from "react";
import SearchResult from "./SearchResult";
import { useRouter } from "next/navigation";

export default function Search({ docs }) {
  const [searchResult, setSearchResult] = useState([]);
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    doSearch(value);
  };

  const doSearch = useDebounce((term) => {
    const found = docs.filter((doc) => {
      return doc.title.toLowerCase().includes(term.toLowerCase());
    });

    setSearchResult(found);
  }, 500);

  const closeSearchResults = (e) => {
    e.preventDefault();
    router.push(e.target.href);
    setTerm("");
  };

  return (
    <div class="relative hidden lg:block lg:max-w-md lg:flex-auto">
      <button
        type="button"
        class="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
      >
        <Image src="/search.svg" width={50} height={50} class="h-5 w-5" alt="search" />
        <input
          type="text"
          value={term}
          placeholder="Search..."
          onChange={handleChange}
          class="flex-1 focus:border-none focus:outline-none"
        />
        <kbd class="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
          <kbd class="font-sans">Ctrl </kbd>
          <kbd class="font-sans">K</kbd>
        </kbd>
      </button>

      {term && term.trim().length > 0 && (
        <SearchResult
          results={searchResult}
          term={term}
          closeSearchResults={closeSearchResults}
        ></SearchResult>
      )}
    </div>
  );
}
