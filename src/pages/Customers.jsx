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
          onClick={()=>setShowForm(!showForm)}
          className="bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          + Add Customer
        </button>
      </PageHeader>

      {showForm && (
        <div className="bg-white p-4 mb-4 rounded shadow">
          <input placeholder="Customer ID" onChange={(e)=>setForm({...form,id:e.target.value})} className="border p-2 m-1"/>
          <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} className="border p-2 m-1"/>
          <button onClick={handleSubmit} className="bg-green-500 text-white px-3 py-1">
            Save
          </button>
        </div>
      )}

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <table className="w-full text-sm">
          <tbody>
            {data.map((c,i)=>(
              <tr key={i}>
                <td>{c.id}</td>
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