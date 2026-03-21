"use client";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import UserCard from "./user-card";

type UserResult = {
  id: string;
  name: string;
  username: string | null;
  focusArea: string | null;
  location: string | null;
  sharedHabitsCount: number;
};

export default function CommunitySearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<UserResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!query.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }
    timerRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/users/search?q=${encodeURIComponent(query)}&limit=12`,
        );
        const data = (await res.json()) as { users?: UserResult[] };
        setResults(data.users ?? []);
        setSearched(true);
      } finally {
        setLoading(false);
      }
    }, 350);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query]);

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or username..."
          className="w-full rounded-xl border border-gray-100 bg-white lg:pl-8 xl:pl-10 lg:pr-4 xl:pr-5 lg:py-2 xl:py-2.5 lg:text-[11px] xl:text-xs 2xl:text-sm focus:border-primary/40 focus:outline-none"
        />
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded border-2 border-gray-300 border-t-transparent animate-spin" />
        )}
      </div>

      {searched && results.length === 0 && (
        <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-muted/20 lg:p-4 xl:p-5 text-center">
          <p className="text-muted-foreground lg:text-[11px] xl:text-xs 2xl:text-sm">
            No members found for &ldquo;{query}&rdquo;.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {results.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      )}
    </div>
  );
}
