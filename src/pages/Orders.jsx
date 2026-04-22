import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { orders as initialData } from "../data/orders";

export default function Orders() {
  const [data, setData] = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({});

  const handleSubmit = () => {
    setData([...data, form]);
    setShowForm(false);
  };

  return (
    <div>
      <PageHeader title="Orders" breadcrumb={["Dashboard", "Order List"]}>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-primary"
        >
          + Add Order
        </button>
      </PageHeader>

      {/* ✅ FORM */}
      {showForm && (
        <div className="card mb-4 grid grid-cols-2 gap-4">
          <input 
            className="input" 
            placeholder="Order ID"
            onChange={(e) => setForm({ ...form, id: e.target.value })} 
          />

          <input 
            className="input" 
            placeholder="Customer Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
          />

          <select 
            className="input"
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>

          <input 
            className="input" 
            placeholder="Total Price"
            onChange={(e) => setForm({ ...form, price: e.target.value })} 
          />

          <input 
            type="date" 
            className="input"
            onChange={(e) => setForm({ ...form, date: e.target.value })} 
          />

          <button className="btn-primary col-span-2" onClick={handleSubmit}>
            Save Order
          </button>
        </div>
      )}

      {/* ✅ TABLE */}
      <div className="card hover:shadow-md transition-all overflow-x-auto">
        <table className="w-full text-sm">
          <tbody>
            {data.map((o, i) => (
              <tr key={i} className="border-b">
                <td className="p-3">{o.id}</td>
                <td>{o.name}</td>
                <td>{o.status}</td>
                <td>{o.price}</td>
                <td>{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}