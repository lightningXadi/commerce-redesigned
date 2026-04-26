"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Form from "next/form";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();

  return (
    <Form action="/search" className="relative">
      <input
        key={searchParams?.get("q")}
        type="text"
        name="q"
        placeholder="Search..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="w-48 lg:w-64 rounded-none border-b bg-transparent px-3 py-1.5 text-sm placeholder:text-stone-400 outline-none transition-all duration-200 focus:w-72"
        style={{
          borderColor: 'var(--sand)',
          color: 'var(--espresso)',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
        }}
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <MagnifyingGlassIcon className="h-4 w-4" style={{ color: 'var(--sand)' }} />
      </div>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="w-48 rounded-none border-b bg-transparent px-3 py-1.5 text-sm placeholder:text-stone-400 outline-none"
        style={{ borderColor: 'var(--sand)', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <MagnifyingGlassIcon className="h-4 w-4" style={{ color: 'var(--sand)' }} />
      </div>
    </div>
  );
}
