import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";

createRoot(document.getElementById('root'))
.render(
  <div className="bg-gray-50 min-h-screen">
    {/* Judul sesuai gambar */}
    {/* <h1 className="text-8xl font-black p-8 pb-0 text-gray-900 tracking-tighter uppercase">TES</h1> */}
    <FrameworkListSearchFilter />
  </div>
)