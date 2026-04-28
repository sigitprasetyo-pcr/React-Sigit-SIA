import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { customers as initialData } from "../data/customers";

export default function Customers() {
  const [data, setData] = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({});

  const handleSubmit = () => {
    setData([...data, form]);
    setShowForm(false);
  };

  return (
    <div>
      <PageHeader title="Customers" breadcrumb={["Dashboard", "Customer List"]}>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-primary"
        >
          + Add Customer
        </button>
      </PageHeader>

      {/* ✅ FORM */}
      {showForm && (
        <div className="card mb-4 grid grid-cols-2 gap-4">
          <input 
            className="input" 
            placeholder="Customer ID"
            onChange={(e) => setForm({ ...form, id: e.target.value })} 
          />

          <input 
            className="input" 
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
          />

          <input 
            className="input" 
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })} 
          />

          <input 
            className="input" 
            placeholder="Phone"
            onChange={(e) => setForm({ ...form, phone: e.target.value })} 
          />

          <select 
            className="input"
            onChange={(e) => setForm({ ...form, loyalty: e.target.value })}
          >
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>

          <button className="btn-primary col-span-2" onClick={handleSubmit}>
            Save Customer
          </button>
        </div>
      )}

      {/* ✅ TABLE */}
      <div className="card hover:shadow-md transition-all overflow-x-auto">
        <table className="w-full text-sm">
          <tbody>
            {data.map((c, i) => (
              <tr key={i} className="border-b">
                <td className="p-3">{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}