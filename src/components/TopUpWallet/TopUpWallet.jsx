import { useContext, useState } from "react"
import { cards } from "../../constants/demoData"
import {
  formatCardNumber,
  obfuscateCardNumber,
} from "../../constants/helper-functions"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import CustomInput from "../CustomInput/CustomInput"
import CustomSelect from "../CustomSelect/CustomSelect"

export default function TopUpWallet() {
  const { wallets, walletTypes, cards } = useContext(PayMakerAPIContext)
  // console.log(cards)

  const [wallet, setWallet] = useState("")
  const [amount, setAmount] = useState(0)
  const [source, setSource] = useState("Wallet")
  const [subSource, setSubSource] = useState(null)

  return (
    <>
      {/* Form */}
      <div className="grow w-full p-3 flex flex-col gap-4 justify-between h-full">
        {/* Select Wallet */}
        <div>
          <CustomSelect
            title="Select Wallet"
            icon={<i className="fa-solid fa-wallet"></i>}
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
            value={wallet}
            changeHandlerFunc={setWallet}
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

        {/* Source */}
        <div>
          <CustomSelect
            title="Source"
            icon={<i className="fa-brands fa-sourcetree"></i>}
            options={["Wallet", "Card"]}
            value={source}
            changeHandlerFunc={setSource}
          />
        </div>

        {/* Sub Source */}
        <div>
          <CustomSelect
            title={source}
            icon={<i className="fa-solid fa-credit-card"></i>}
            options={
              source === "Wallet"
                ? wallets
                  ? wallets.map((wallet) => {
                      return {
                        title: wallet.title,
                        value: wallet.id,
                      }
                    })
                  : []
                : cards
                ? cards.map((card) => {
                    return {
                      title: obfuscateCardNumber(card.number),
                      value: card.id,
                    }
                  })
                : []
            }
            value={subSource}
            changeHandlerFunc={setSubSource}
          />
        </div>

        {/* Button */}
        <div className="w-full flex justify-center items-center p-3">
          <button
            disabled
            className="py-3 bg-slate-800 px-6 rounded-lg shadow-inner shadow-black zoom-in cursor-pointer hover:shadow-lg hover:shadow-black uppercase flex justify-center items-center">
            <span>
              <i className="fa-solid fa-wallet"></i>
            </span>
            <span className="ml-2">Top Up</span>
          </button>
        </div>
      </div>
    </>
  )
}
