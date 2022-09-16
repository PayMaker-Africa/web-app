export default function DataCard({ title = "", text = "", icon = "" }) {
  return (
    <div className="rounded-lg shadow-md shadow-black bg-slate-600 w-full p-3 px-6 h-fit flex gap-2 cursor-pointer hover:bg-black zoom-in hover:shadow-inner hover:shadow-stone-900">
      {/* Icon */}
      <div className="p-3 bg-sky-200 text-black rounded-lg shadow-xl flex items-center justify-center">
        {icon}
      </div>

      {/* Title & Text */}
      <div className="flex flex-col justify-between flex-nowrap whitespace-nowrap">
        <span className="text-xs">{title}</span>
        <span className="text-sm lg:text-lg">{text}</span>
      </div>
    </div>
  )
}
