"use client";
import { useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
export default function SearchCountry() {
  const searchParams = useSearchParams();
  const country = searchParams.get("search") || "";
  return (
    <form action="" method="" className="flex gap-4">
      <input
        type="text"
        name="search"
        placeholder="Search by country name or code"
        className="w-full p-2 border border-gray-300 rounded-lg"
        defaultValue={country}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-700 rounded-md text-white"
      >
        Search
      </button>
    </form>
  );
}
