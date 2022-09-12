export default function AccountsCard({ account }) {
  return (
    <div className="w-full rounded-md shadow-md shadow-black p-3 bg-slate-800 cursor-pointer flex flex-wrap gap-6 items-center hover:scale-[1.025] ease-linear duration-300">
      {/* Bank Logo */}
      <div className="w-10 rounded-md overflow-hidden">
        <img
          src={`https://picsum.photos/200?random=${Math.ceil(
            Math.random() * 99
          )}`}
          alt="Bank"
          className="object-cover w-full"
        />
      </div>

      {/* Details */}
      <div className="grow h-full p-2 flex flex-col">
        <span className="text-xs md:text-sm lg:text-base whitespace-nowrap">
          {account.accountName}
        </span>
        <span className="text-xs md:text-sm lg:text-base">
          {account.bankName} | {account?.accountNumber || ""}
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-4 justify-around p-3 items-center text-xl w-full bg-slate-900 shadow-inner shadow-black rounded-md">
        <span className="bg-sky-600 rounded-md shadow-lg shadow-black p-3 flex justify-center items-center text-xs md:text-sm">
          <i className="fa-solid fa-pencil"></i>
        </span>
        <span className="bg-red-500 rounded-md shadow-lg shadow-black p-3 flex justify-center items-center text-xs md:text-sm">
          <i className="fa-solid fa-trash-can"></i>
        </span>
        <span className="bg-red-900 rounded-md shadow-lg shadow-black p-3 flex justify-center items-center text-xs md:text-sm">
          <i className="fa-solid fa-ban"></i>
        </span>
      </div>
    </div>
  )
}
