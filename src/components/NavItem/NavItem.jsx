export default function NavItem({
  icon = "",
  title = "",
  isActive = false,
  onClickFunc = () => {},
  color = "",
}) {
  return (
    <div
      className={`p-4 flex flex-col items-center justify-center cursor-pointer zoom-in hover:bg-slate-600 w-full ${
        isActive && "bg-slate-700 border-l-4 border-l-blue-500"
      }`}
      onClick={onClickFunc}>
      {/* Icon */}
      <span
        className={`text-sm lg:text-base rounded-lg items-center justify-center flex ${color}`}>
        {icon}
      </span>

      {/* Title */}
      <span className="text-sm mt-2">{title}</span>
    </div>
  )
}
