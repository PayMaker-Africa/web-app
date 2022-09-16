export default function ActionCard({ title = "", content = "" }) {
  return (
    <div className="p-3 rounded-lg shadow-md shadow-black w-full h-full flex flex-col justify-between items-center bg-slate-900 gap-4 overflow-scroll">
      {/* Title */}
      <div className="flex justify-center uppercase font-quicksand font-bold underline underline-offset-8">
        {title}
      </div>

      {/* Content */}
      <div className="grow w-full flex flex-col">{content}</div>
    </div>
  )
}
