export default function CustomInput({
  icon = "",
  type = "text",
  placeholder = "",
}) {
  return (
    <div className="flex items-center p-3 shadow-inner shadow-black rounded-lg text-sm bg-slate-800 h-full">
      <span className="flex items-center justify-center mr-3">{icon}</span>
      <span className="grow flex">
        <input
          type={type}
          className={`focus:border-0 focus:outline-none w-full placeholder:text-white outline-none border-0 ${
            type === "color" && "cursor-pointer"
          }`}
          placeholder={placeholder}
        />
      </span>
    </div>
  )
}
