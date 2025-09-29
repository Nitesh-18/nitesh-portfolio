import { cookies } from "next/headers";
import dbConnect from "@/lib/db";
import Visitor from "@/lib/models/Visitor";
import VisitorTable from "./VisitorTable";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = cookies();
  const auth = (await cookieStore).get("admin_auth");

  if (!auth?.value) {
    // Redirect to login if not authenticated
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.href='/admin/login';`,
        }}
      />
    );
  }

  await dbConnect();
  const totalCount = await Visitor.countDocuments();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-400">Visitor Logs</h1>
      <VisitorTable totalCount={totalCount} />
    </div>
  );
}
