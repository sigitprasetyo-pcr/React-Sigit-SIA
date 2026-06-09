export default function GenericTable({ columns, data, renderRow }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full overflow-hidden rounded-2xl shadow-lg">
        <thead className="bg-emerald-600 text-white">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-6 py-3 text-left text-sm font-semibold"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
          {data.map((item, index) => (
            <tr key={item.id || index} className="hover:bg-gray-50">
              {renderRow(item, index)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}