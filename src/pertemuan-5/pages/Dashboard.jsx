import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

function Card({ icon, value, label, bg }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm px-6 py-5 flex items-center gap-4 hover:shadow-md transition">
      <div className={`w-14 h-14 flex items-center justify-center rounded-full ${bg} text-white text-xl`}>
        {icon}
      </div>

      <div>
        <p className="text-2xl font-bold text-gray-800 leading-none">{value}</p>
        <p className="text-sm text-gray-400 mt-1">{label}</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="flex bg-[#F3F4F6] min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="px-6 py-6">
          <PageHeader />

          {/* CARD */}
          <div className="grid grid-cols-4 gap-6 mt-5">
            <Card icon={<FaShoppingCart />} value="75" label="Total Orders" bg="bg-green-500" />
            <Card icon={<FaTruck />} value="357" label="Total Delivered" bg="bg-blue-500" />
            <Card icon={<FaBan />} value="65" label="Total Canceled" bg="bg-red-500" />
            <Card icon={<FaDollarSign />} value="$128" label="Total Revenue" bg="bg-green-600" />
          </div>

          {/* CHART SECTION */}
          <div className="grid grid-cols-2 gap-6 mt-6">

            {/* PIE CHART */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-700">Pie Chart</h3>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <input type="checkbox" /> Chart
                  </span>
                  <span className="flex items-center gap-1">
                    <input type="checkbox" defaultChecked /> Show Value
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center">

                {/* Circle 1 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 rounded-full bg-red-100 flex items-center justify-center">
                    <div className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center text-sm font-bold">
                      81%
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">Total Order</p>
                </div>

                {/* Circle 2 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center text-sm font-bold">
                      22%
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">Customer Growth</p>
                </div>

                {/* Circle 3 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center text-sm font-bold">
                      62%
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">Total Revenue</p>
                </div>

              </div>
            </div>

            {/* LINE CHART */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-700">Chart Order</h3>
                <button className="text-sm border border-blue-300 text-blue-600 px-4 py-1.5 rounded-xl hover:bg-blue-50">
                  Save Report
                </button>
              </div>

              <div className="h-44 flex items-end gap-3">
                <div className="bg-blue-300 w-3 h-12 rounded"></div>
                <div className="bg-blue-400 w-3 h-24 rounded"></div>
                <div className="bg-blue-300 w-3 h-16 rounded"></div>
                <div className="bg-blue-500 w-3 h-32 rounded"></div>
                <div className="bg-blue-300 w-3 h-20 rounded"></div>
                <div className="bg-blue-400 w-3 h-28 rounded"></div>
                <div className="bg-blue-500 w-3 h-36 rounded"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}