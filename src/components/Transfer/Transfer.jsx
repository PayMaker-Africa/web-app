import { useState } from "react"
import { useContext } from "react"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import CustomInput from "../CustomInput/CustomInput"
import CustomSelect from "../CustomSelect/CustomSelect"

export default function Transfer() {
  const { wallets } = useContext(PayMakerAPIContext)

  const [source, setSource] = useState("")
  const [transferTo, setTransferTo] = useState("")
  const [destination, setDestination] = useState("")
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <>
      {/* Form */}
      <div className="grow w-full p-3 flex flex-col gap-4 justify-between h-full">
        {/* Source */}
        <div>
          <CustomSelect
            title="Transfer From"
            icon={<i className="fa-solid fa-wallet"></i>}
            value={source}
            changeHandlerFunc={setSource}
            options={
              wallets
                ? wallets
                    .filter((wallet) => wallet.id !== recipient)
                    .map((wallet) => {
                      return {
                        title: wallet.title,
                        value: wallet.id,
                      }
                    })
                : []
            }
          />
        </div>

        {/* Transfer To */}
        <div>
          <CustomSelect
            title="Transfer To"
            icon={<i className="fa-solid fa-wallet"></i>}
            value={transferTo}
            changeHandlerFunc={setTransferTo}
            options={["Between My Wallets", "External Wallet"]}
          />
        </div>

        {/* Destination - Between My Wallets */}
        {transferTo === "Between My Wallets" && (
          <div>
            <CustomSelect
              title="Destination Wallet"
              icon={<i className="fa-solid fa-user"></i>}
              options={
                wallets
                  ? wallets
                      .filter((wallet) => wallet.id !== source)
                      .map((wallet) => {
                        return {
                          title: wallet.title,
                          value: wallet.id,
                        }
                      })
                  : []
              }
              value={destination}
              changeHandlerFunc={setDestination}
            />
          </div>
        )}

        {/* Recipient - External Wallet */}
        {transferTo === "External Wallet" && (
          <div className="h-14">
            <CustomInput
              icon={<i className="fa-solid fa-money-bills"></i>}
              placeholder="Recipient Wallet"
              value={recipient}
              handleValueChange={setRecipient}
            />
          </div>
        )}

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

        {/* Button */}
        <div className="w-full flex justify-center items-center p-3">
          <button className="py-3 bg-slate-800 px-6 rounded-lg shadow-inner shadow-black zoom-in cursor-pointer hover:shadow-lg hover:shadow-black uppercase flex justify-center items-center">
            <span>
              <i className="fa-solid fa-paper-plane"></i>
            </span>
            <span className="ml-2">Transfer</span>
          </button>
        </div>
      </div>
    </>
  )
}
