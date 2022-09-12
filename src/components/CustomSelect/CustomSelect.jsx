export default function CustomSelect({
  icon = <i class="fa-solid fa-layer-group"></i>,
  title = "",
}) {
  return (
    <div className="h-14 flex justify-center items-center shadow-inner shadow-black rounded-lg text-sm bg-slate-800">
      <span className="flex items-center justify-center p-3">{icon} </span>
      <select className="outline-none mr-3">
        <option value="" className="bg-slate-900">
          {title}
        </option>
        <option value="" className="bg-slate-900">
          Hello, World
        </option>
        <option value="" className="bg-slate-900">
          Hello, World
        </option>
        <option value="" className="bg-slate-900">
          Hello, World
        </option>
        <option value="" className="bg-slate-900">
          Hello, World
        </option>
      </select>
    </div>
  )
}
