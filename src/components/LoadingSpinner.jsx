export default function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="p-8 text-center text-gray-500">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500 mx-auto mb-3"></div>
      <p className="text-sm">{text}</p>
    </div>
  );
}