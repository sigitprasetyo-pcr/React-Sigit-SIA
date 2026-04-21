import PageHeader from "../components/PageHeader";
<PageHeader title="Customers" subtitle="Customer List" />

export default function Customers() {
  return (
    <div>
      <PageHeader />

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Customer List</h2>

        <table className="w-full text-sm text-left">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-2">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="py-3">John Doe</td>
              <td>john@email.com</td>
              <td>08123456789</td>
              <td className="text-green-500 font-medium">Active</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Jane Smith</td>
              <td>jane@email.com</td>
              <td>08234567890</td>
              <td className="text-red-500 font-medium">Inactive</td>
            </tr>

            <tr>
              <td className="py-3">Michael Lee</td>
              <td>michael@email.com</td>
              <td>08345678901</td>
              <td className="text-green-500 font-medium">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}