"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const SearchResults = dynamic(() => import("@/components/SearchResults"), {
  ssr: false,
});

export default function SearchResultsWrapper() {
  return (
    <Suspense fallback={<p>Loading search results...</p>}>
      <SearchResults />
    </Suspense>
  );
}
