import { useRef, useState } from "react"

export default function CustomInput({
  icon = "",
  type = "text",
  placeholder = "",
  autoComplete = "off",
  value = null,
  handleValueChange = () => {},
  required = false,
  autoFocus = false,
}) {
  // const [inputValue, setInputValue] = useState()

  const [placeholderValue] = useState(type === "color" ? "#000000" : "")

  const colorPicker = useRef()

  return type === "color" ? (
    <div className="w-full flex items-center overflow-hidden gap-4 h-full p-3 shadow-inner shadow-black rounded-lg text-sm bg-slate-800">
      {/* Color Picker */}
      <div className="cp_wrapper shrink-0">
        <input
          type="color"
          value={(value && value.toUpperCase()) || placeholderValue}
          className="cursor-pointer"
          onChange={(e) => handleValueChange(e.target.value.toUpperCase())}
          ref={colorPicker}
        />
      </div>

      <span
        className={`focus:border-0 focus:outline-none w-full placeholder:text-white outline-none border-0 cursor-pointer`}
        onClick={() => colorPicker.current.click()}>
        {value || placeholder}
      </span>
    </div>
  ) : (
    <div className="flex items-center p-3 shadow-inner shadow-black rounded-lg text-sm bg-slate-800 h-full">
      <span className="flex items-center justify-center mr-3">{icon}</span>
      <span className="grow flex">
        <input
          type={type}
          className={`focus:border-0 focus:outline-none w-full placeholder:text-white outline-none border-0`}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value || placeholderValue}
          onChange={(e) => handleValueChange(e.target.value)}
          required={required}
          autoFocus={autoFocus}
        />
      </span>
    </div>
  )
}
