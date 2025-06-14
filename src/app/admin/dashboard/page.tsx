export const dynamic = "force-dynamic";

import dbConnect from "@/lib/db";
import Visitor from "@/lib/models/Visitor";

export default async function AdminPage() {
  await dbConnect();
  const visitors = await Visitor.find().sort({ time: -1 }).lean();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-400">Visitor Logs</h1>
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
                  {v.time ? new Date(v.time).toLocaleString() : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
