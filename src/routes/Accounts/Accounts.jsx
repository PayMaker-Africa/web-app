import AccountsCard from "../../components/AccountsCard/AccountsCard"
import CustomInput from "../../components/CustomInput/CustomInput"
import CustomSelect from "../../components/CustomSelect/CustomSelect"
import { accounts } from "../../constants/demoData"

export default function Accounts({}) {
  return (
    <div className="flex flex-wrap border-red-500 h-full">
      {/* Add Account */}
      <div className="w-full xl:w-1/2 shadow-inner flex justify-center mb-10">
        <div className="bg-slate-500 p-5 h-96 w-96 mt-10 rounded-lg shadow-md shadow-black flex flex-col gap-8">
          {/* Title */}
          <div className="flex justify-center items-center uppercase underline underline-offset-4 font-sen font-bold text-lg ">
            Add New Account
          </div>

          {/* Status Message */}
          <div className="flex justify-center bg-red-900 rounded-lg p-3 font-semibold">
            Account Number Must Be 10 Digits
          </div>

          {/* Select Bank */}
          <CustomSelect
            icon={<i class="fa-solid fa-building-columns"></i>}
            title="Select Bank"
          />

          {/* Account Number */}
          <div className="h-14">
            <CustomInput
              icon={<i class="fa-solid fa-arrow-up-9-1"></i>}
              placeholder="Account Number"
            />
          </div>

          {/* Button */}
          <div className="w-full flex justify-center items-center">
            <button className="flex gap-1 justify-center items-center py-3 px-6 rounded-md shadow-inner shadow-black bg-slate-900 zoom-in hover:shadow-md hover:shadow-black uppercase">
              <span>
                <i class="fa-solid fa-plus"></i>
              </span>
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>

      {/* Manage Accounts */}
      <div className="w-full xl:w-1/2 bg-slate-900 shadow-inner shadow-black rounded-md p-3 flex flex-col gap-4 overflow-y-scroll h-full">
        {accounts.map((account, index) => {
          return (
            <div
              key={index}
              className={`p-5 w-[85%] mx-auto ${index > 0 && "mt-5"}`}>
              <AccountsCard account={account} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
