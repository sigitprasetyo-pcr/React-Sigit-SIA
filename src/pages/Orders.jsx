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
          className="bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          + Add Order
        </button>
      </PageHeader>

      {showForm && (
        <div className="bg-white p-4 mb-4 rounded shadow">
          <input placeholder="Order ID" onChange={(e)=>setForm({...form,id:e.target.value})} className="border p-2 m-1"/>
          <input placeholder="Customer Name" onChange={(e)=>setForm({...form,name:e.target.value})} className="border p-2 m-1"/>
          <button onClick={handleSubmit} className="bg-green-500 text-white px-3 py-1">
            Save
          </button>
        </div>
      )}

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <table className="w-full text-sm">
          <tbody>
            {data.map((o,i)=>(
              <tr key={i}>
                <td>{o.id}</td>
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