"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function VisitorTable({ totalCount: initialTotalCount }: { totalCount: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = 10;

  const [visitors, setVisitors] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState(initialTotalCount);

  useEffect(() => {
    const fetchVisitors = async () => {
      const res = await fetch(`/api/visitors?page=${page}&limit=${limit}`);
      const data = await res.json();
      setVisitors(data.visitors);
      setTotalCount(data.totalCount);
    };
    fetchVisitors();
  }, [page]);

  const totalPages = Math.max(1, Math.ceil(totalCount / limit));

  const changePage = (pg: number) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("page", pg.toString());
    router.push(`?${params.toString()}`);
  };

  // Helper to generate advanced pagination
  function getPagination(current: number, total: number) {
    const pages: (number | string)[] = [];
    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
      return pages;
    }
    pages.push(1, 2);
    if (current > 4) pages.push("...");
    for (let i = Math.max(3, current - 1); i <= Math.min(total - 2, current + 1); i++) {
      if (i > 2 && i < total - 1) pages.push(i);
    }
    if (current < total - 3) pages.push("...");
    pages.push(total - 1, total);
    return pages;
  }

  return (
    <>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-gray-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-700 text-blue-300">
              <th className="py-3 px-4 text-left">IP</th>
              <th className="py-3 px-4 text-left">City</th>
              <th className="py-3 px-4 text-left">Region</th>
              <th className="py-3 px-4 text-left">Country</th>
              <th className="py-3 px-4 text-left">Device</th>
              <th className="py-3 px-4 text-left">Org</th>
              <th className="py-3 px-4 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((v, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
              >
                <td className="py-2 px-4">{v.ip}</td>
                <td className="py-2 px-4">{v.city}</td>
                <td className="py-2 px-4">{v.region}</td>
                <td className="py-2 px-4">{v.country}</td>
                <td className="py-2 px-4">{v.device?.slice(0, 20) ?? "N/A"}</td>
                <td className="py-2 px-4">{v.org}</td>
                <td className="py-2 px-4">
                  {v.time
                    ? new Date(v.time).toLocaleString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true,
                      })
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center items-center gap-2 flex-wrap">
        <button
          onClick={() => changePage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="px-3 py-2 rounded-md bg-gray-700 text-blue-300 hover:bg-gray-600 disabled:opacity-50"
        >
          Prev
        </button>
        {getPagination(page, totalPages).map((pg, idx) =>
          typeof pg === "number" ? (
            <button
              key={pg}
              onClick={() => changePage(pg)}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pg === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-blue-300 hover:bg-gray-600"
              }`}
            >
              {pg}
            </button>
          ) : (
            <span key={`ellipsis-${idx}`} className="px-2 text-gray-400 select-none">
              ...
            </span>
          )
        )}
        <button
          onClick={() => changePage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="px-3 py-2 rounded-md bg-gray-700 text-blue-300 hover:bg-gray-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
// This component fetches and displays a paginated table of visitors.