import { useState } from "react"

export default function Accordion({}) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <div
        className="pb-3 border-b w-full flex justify-between items-center"
        onClick={() => setExpanded(() => !expanded)}>
        <span className="font-semibold">Accordion Header</span>
        <span className="cursor-pointer xl:font-bold text-xl">
          <i
            className={`ease-linear duration-300 fa-solid fa-square-caret-down ${
              expanded && "rotate-180"
            }`}></i>
        </span>
      </div>

      {/* Contents */}
      <div
        className={`ease-linear duration-200 ${
          !expanded ? "h-0 overflow-hidden" : "py-4 px-2 text-sm xl:leading-8"
        } `}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
        saepe deserunt cumque amet molestiae quas officia repudiandae ab odit
        neque laborum facere consequatur ex ipsam consequuntur laudantium
        quidem, blanditiis expedita tempora minima eum soluta. Porro omnis,
        exercitationem magnam voluptatem numquam perferendis, reiciendis
        provident harum qui, id modi earum illum aliquam.
      </div>
    </div>
  )
}
