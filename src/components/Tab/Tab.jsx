export default function Tab({ icon = "", header = "" }) {
  return (
    <div className="dark:text-white font-bold rounded-tr-xl text-xs md:text-sm p-3 bg-slate-600 flex items-center gap-1">
      {icon}
      <span className="">{header}</span>
    </div>
  )
}
