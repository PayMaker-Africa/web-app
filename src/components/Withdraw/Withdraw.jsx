import { useContext } from "react"
import { useState } from "react"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import CustomInput from "../CustomInput/CustomInput"
import CustomSelect from "../CustomSelect/CustomSelect"

export default function Withdraw() {
  const { wallets, bankAccounts } = useContext(PayMakerAPIContext)

  const [wallet, setWallet] = useState("")
  const [amount, setAmount] = useState(0)
  const [bankAccount, setBankAccount] = useState("")

  return (
    <>
      {/* Form */}
      <div className="grow w-full p-3 flex flex-col gap-4 justify-between h-full">
        {/* Select Wallet */}
        <div>
          <CustomSelect
            title="Select Wallet"
            icon={<i className="fa-solid fa-wallet"></i>}
            value={wallet}
            changeHandlerFunc={setWallet}
            options={
              wallets
                ? wallets.map((wallet) => {
                    return {
                      title: wallet.title,
                      value: wallet.id,
                    }
                  })
                : []
            }
          />
        </div>

        {/* Amount */}
        <div className="h-14">
          <CustomInput
            icon={<i className="fa-solid fa-money-bills"></i>}
            placeholder="Amount"
            type="number"
            value={amount}
            handleValueChange={setAmount}
          />
        </div>

        {/* Destination */}
        <div>
          <CustomSelect
            title="Destination Account"
            icon={<i className="fa-brands fa-account"></i>}
            value={bankAccount}
            changeHandlerFunc={setBankAccount}
            options={
              bankAccounts
                ? bankAccounts.map((bankAccount) => {
                    return {
                      title: `${bankAccount.bank_name} - ${bankAccount.account_name}`,
                      value: bankAccount.id,
                    }
                  })
                : []
            }
          />
        </div>

        {/* Button */}
        <div className="w-full flex justify-center items-center p-3">
          <button className="py-3 bg-slate-800 px-6 rounded-lg shadow-inner shadow-black zoom-in cursor-pointer hover:shadow-lg hover:shadow-black uppercase flex justify-center items-center">
            <span>
              <i className="fa-solid fa-money-bill-transfer"></i>
            </span>
            <span className="ml-2">Withdraw</span>
          </button>
        </div>
      </div>
    </>
  )
}
