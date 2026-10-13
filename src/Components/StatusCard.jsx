export default function StatusCard({
  title,
  count,
  icon: Icon,
  color,
  description,
}) {
  return (
    <div className="rounded-2xl border border-violet-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="mt-3 text-3xl font-extrabold text-slate-800">
            {count}
          </h3>
        </div>

        <div className={`rounded-xl p-3 ${color}`}>
          <Icon size={23} />
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-400">{description}</p>
    </div>
  );
}