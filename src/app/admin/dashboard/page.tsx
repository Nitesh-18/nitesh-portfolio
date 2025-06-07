import dbConnect from "@/lib/db";
import Visitor from "@/lib/models/Visitor";

export default async function AdminPage() {
  await dbConnect();
  const visitors = await Visitor.find().sort({ time: -1 }).lean();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Visitor Logs</h1>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>IP</th><th>City</th><th>Region</th><th>Country</th><th>Device</th><th>Org</th><th>Time</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((v, i) => (
            <tr key={i}>
              <td>{v.ip}</td>
              <td>{v.city}</td>
              <td>{v.region}</td>
              <td>{v.country}</td>
              <td>{v.device.slice(0, 20)}</td>
              <td>{v.org}</td>
              <td>{new Date(v.time).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
