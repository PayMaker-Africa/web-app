export default function Actions() {
  return (
    <div className="flex gap-4 justify-around p-3 items-center text-xl w-full bg-black/50 shadow-inner shadow-black rounded-md">
      {/* Edit */}
      <span className="bg-sky-600 rounded-md shadow-lg shadow-black p-3 flex justify-center items-center text-xs md:text-sm zoom-in cursor-pointer">
        <i className="fa-solid fa-pencil"></i>
      </span>

      {/* Delete */}
      <span className="bg-red-500 rounded-md shadow-lg shadow-black p-3 flex justify-center items-center text-xs md:text-sm zoom-in cursor-pointer">
        <i className="fa-solid fa-trash-can"></i>
      </span>

      {/* Deactivate */}
      <span className="bg-red-900 rounded-md shadow-lg shadow-black p-3 flex justify-center items-center text-xs md:text-sm zoom-in cursor-pointer">
        <i className="fa-solid fa-ban"></i>
      </span>
    </div>
  )
}
