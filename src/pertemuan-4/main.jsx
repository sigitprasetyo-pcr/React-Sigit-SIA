import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./FrameworkList";

createRoot(document.getElementById('root'))
.render(
  <div>
    {/* Teks "tes" besar sesuai gambar pertama */}
    <h1 className="text-6xl font-bold p-8 pb-0">tes</h1>
    <FrameworkList/>
  </div>
)