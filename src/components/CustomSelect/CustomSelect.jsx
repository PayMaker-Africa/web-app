import { useState } from "react"
import { generateRandomNumber } from "../../constants/helper-functions"

export default function CustomSelect({
  icon = <i class="fa-solid fa-layer-group"></i>,
  title = null,
  options = [],
  value = null,
  changeHandlerFunc = () => {},
}) {
  // const [selected, setSelected] = useState(title || options[0])
  const [parsedOptions] = useState(() => {
    if (typeof options === "object") {
    }
  })

  return (
    <div className="h-14 flex justify-center items-center shadow-inner shadow-black rounded-lg text-sm bg-slate-800">
      <span className="flex items-center justify-center p-3">{icon} </span>
      <select
        className="outline-none mr-3"
        value={value || title || ""}
        onChange={(e) => changeHandlerFunc(e.target.value)}>
        {title && (
          <option disabled className="bg-slate-600 text-blue-100 m-5">
            {title}
          </option>
        )}
        {options.map((option) => (
          <option
            key={generateRandomNumber(999999, 999999999999)}
            value={typeof option === "string" ? option : option.value}
            className="bg-slate-900">
            {typeof option === "string" ? option : option.title}
          </option>
        ))}
      </select>
    </div>
  )
}
