import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8 flex flex-col gap-4">
            {frameworkData.map((item) => (
                <div key={item.id} className="border p-6 rounded-xl shadow-sm bg-white max-w-lg relative">
                    {/* Tombol menu dot sesuai gambar */}
                    <div className="absolute top-4 right-4 text-gray-400">•••</div>

                    <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    
                    {/* Dot Notation untuk mengakses item.details */}
                    <p className="text-sm mt-2 text-gray-500">
                        Developed by: <span className="font-bold text-black">{item.details.developer}</span> ({item.details.releaseYear})
                    </p>

                    {/* Link Website yang bisa diklik */}
                    <a 
                        href={item.details.officialWebsite} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-blue-500 text-sm underline mt-1 inline-block hover:text-blue-700"
                    >
                        Visit Website
                    </a>

                    {/* Render Tags menggunakan .map() sesuai gambar */}
                    <div className="flex flex-wrap mt-4">
                        {item.tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="bg-gray-400 text-gray-700 px-3 py-1 text-[10px] rounded-full mr-2 mb-2 border border-gray-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}