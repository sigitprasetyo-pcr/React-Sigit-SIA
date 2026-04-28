export default function PageHeader({ title, breadcrumb, children }) {
  const breadcrumbText = Array.isArray(breadcrumb)
    ? breadcrumb.join(" / ")
    : breadcrumb;

  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          {title}
        </h1>

        <div className="text-sm text-gray-400 mt-1">
          {breadcrumbText}
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}