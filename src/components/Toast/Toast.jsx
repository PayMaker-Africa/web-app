import { useEffect } from "react"
import { useState } from "react"

export default function Toast({
  options: {
    mode = 1,
    position = "top-right",
    message = "Action Successful",
    lifespan = 5,
    icon = <i className="fa-solid fa-check"></i>,
    visible = false,
    visibilityHandlerFunc = () => {},
  },
}) {
  useEffect(() => {
    setTimeout(() => {
      visibilityHandlerFunc(() => !visible)
    }, lifespan * 1000)
  }, [message])
  return (
    <div
      className={`z-20 absolute top-2 right-2 ${
        visible
          ? "p-3 w-[24rem] flex justify-center items-center"
          : "w-0 h-0 overflow-hidden"
      } ease-linear duration-300  ${
        mode === 1
          ? "bg-emerald-600"
          : mode === 2
          ? "bg-red-600"
          : "bg-yellow-500"
      } rounded-lg shadow-black shadow-md`}>
      <span>{icon}</span>
      <span className="ml-3"> {message}</span>
    </div>
  )
}
