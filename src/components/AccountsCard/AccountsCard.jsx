import { bankLogosRequiringWhiteBg } from "../../constants/helper-functions"
import Actions from "../Actions/Actions"

export default function AccountsCard({ account }) {
  return (
    <div className="w-full rounded-md shadow-md shadow-black p-3 bg-slate-800 cursor-pointer flex flex-wrap gap-6 items-center hover:scale-[1.025] ease-linear duration-300 zoom-in">
      {/* Bank Logo */}
      <div
        className={`w-10 md:w-14 rounded-md overflow-hidden ${
          bankLogosRequiringWhiteBg.includes(account.bank_name) &&
          "bg-white p-2"
        }`}>
        <img
          src={`./assets/logos/${account.bank_name.replaceAll(" ", "")}.png`}
          // src="./assets/logos/GuarantyTrustBankPlc.png"
          alt="Bank"
          className=" w-full"
        />
      </div>

      {/* Details */}
      <div className="grow h-full p-2 flex flex-col">
        <span className="text-xs md:text-sm lg:text-base whitespace-nowrap">
          {account.account_name}
        </span>
        <span className="text-xs md:text-sm lg:text-base">
          {account.bank_name} | {account?.account_number || ""}
        </span>
      </div>

      {/* Actions */}
      <Actions />
    </div>
  )
}
