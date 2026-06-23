export default function PageHeader({ title, breadcrumb, children }) {
  const breadcrumbText = Array.isArray(breadcrumb)
    ? breadcrumb.join(" / ")
    : breadcrumb;

  return (
    <div className="flex justify-between items-end mb-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          {title}
        </h1>

        <div className="text-sm font-bold text-slate-400 mt-1.5 flex items-center gap-2 uppercase tracking-widest">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></div>
          {breadcrumbText}
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}