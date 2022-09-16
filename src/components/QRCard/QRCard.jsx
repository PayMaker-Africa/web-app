export default function QRCard({ data }) {
  return (
    <div className="rounded-md shadow-lg shadow-black w-full mx-auto bg-slate-700 p-3 flex cursor-pointer hover:scale-95 ease-linear duration-100">
      {/* QR Thumbnail */}
      <div>
        <img
          src={`https://picsum.photos/200?random=${Math.ceil(
            Math.random() * 99
          )}`}
          className="w-12 rounded-lg"
        />
      </div>

      {/* Title */}
      <div className="grow flex items-center ml-2">{data.title}</div>
    </div>
  )
}
