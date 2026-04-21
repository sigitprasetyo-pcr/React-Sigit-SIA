import PageHeader from "../components/PageHeader";
<PageHeader title="Orders" subtitle="Order List" />

export default function Orders() {
  return (
    <div>
      <PageHeader />

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Order List</h2>

        <table className="w-full text-sm text-left">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-2">Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="py-3">#001</td>
              <td>John Doe</td>
              <td>20 Apr 2026</td>
              <td className="text-green-500 font-medium">Completed</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">#002</td>
              <td>Jane Smith</td>
              <td>19 Apr 2026</td>
              <td className="text-yellow-500 font-medium">Pending</td>
            </tr>

            <tr>
              <td className="py-3">#003</td>
              <td>Michael Lee</td>
              <td>18 Apr 2026</td>
              <td className="text-red-500 font-medium">Cancelled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}