export const dynamic = "force-dynamic";

import dbConnect from "@/lib/db";
import Visitor from "@/lib/models/Visitor";
import { redirect } from "next/navigation";

export default async function AdminPage({ searchParams }: { searchParams: { page?: string } }) {
  await dbConnect();

  const page = parseInt(searchParams.page || "1", 10);
  const limit = 10;
  const skip = (page - 1) * limit;

  const [visitors, total] = await Promise.all([
    Visitor.find().sort({ time: -1 }).skip(skip).limit(limit).lean(),
    Visitor.countDocuments(),
  ]);

  const totalPages = Math.ceil(total / limit);

  if (page > totalPages && totalPages !== 0) {
    redirect("/admin/dashboard?page=1");
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-400">Visitor Logs</h1>

      <div className="overflow-x-auto rounded-lg shadow-lg bg-gray-800 mb-4">
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
                <td className="py-2 px-4">
                  {v.device?.slice(0, 20) ?? "N/A"}
                </td>
                <td className="py-2 px-4">{v.org}</td>
                <td className="py-2 px-4">
                  {v.time ? new Date(v.time).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded disabled:opacity-50"
          disabled={page <= 1}
          onClick={() => {
            window.location.href = `/admin/dashboard?page=${page - 1}`;
          }}
        >
          ⬅ Previous
        </button>
        <span className="text-sm">
          Page {page} of {totalPages}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded disabled:opacity-50"
          disabled={page >= totalPages}
          onClick={() => {
            window.location.href = `/admin/dashboard?page=${page + 1}`;
          }}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
