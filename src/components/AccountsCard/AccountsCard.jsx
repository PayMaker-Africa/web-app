import Actions from "../Actions/Actions"

export default function AccountsCard({ account }) {
  return (
    <div className="w-full rounded-md shadow-md shadow-black p-3 bg-slate-800 cursor-pointer flex flex-wrap gap-6 items-center hover:scale-[1.025] ease-linear duration-300 zoom-in">
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
      <Actions />
    </div>
  )
}
