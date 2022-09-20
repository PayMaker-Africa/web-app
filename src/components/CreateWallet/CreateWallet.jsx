import { useContext, useState } from "react"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import CustomInput from "../CustomInput/CustomInput"
import CustomSelect from "../CustomSelect/CustomSelect"

export default function CreateWallet() {
  const { walletTypes } = useContext(PayMakerAPIContext)

  const [title, setTitle] = useState("")
  const [openingBalance, setOpeningBalance] = useState(0)
  const [type, setType] = useState("")
  const [color, setColor] = useState("")

  return (
    <>
      {/* Form */}
      <div className="grow w-full p-3 flex flex-col gap-4 justify-between h-full">
        {/* Title */}
        <div className="h-14">
          <CustomInput
            icon={<i className="fa-regular fa-id-badge text-xl"></i>}
            placeholder="Wallet Title"
            value={title}
            handleValueChange={setTitle}
          />
        </div>

        {/* Opening Balance */}
        <div className="h-14">
          <CustomInput
            icon={<i className="fa-solid fa-money-bills"></i>}
            placeholder="Opening Balance"
            type="number"
            value={openingBalance}
            handleValueChange={setOpeningBalance}
          />
        </div>

        {/* Type */}
        <div>
          <CustomSelect
            title="Wallet Type"
            icon={<i className="fa-solid fa-wallet"></i>}
            options={walletTypes.map((wallet) => {
              return { title: wallet.title, value: wallet.id }
            })}
            value={type}
            changeHandlerFunc={setType}
          />
        </div>

        {/* Color */}
        <div className="h-14">
          <CustomInput
            icon={<i className="fa-solid fa-droplet"></i>}
            type="color"
            placeholder="Wallet Color"
            value={color}
            handleValueChange={setColor}
          />
        </div>

        {/* Button */}
        <div className="w-full flex justify-center items-center p-3">
          <button className="py-3 bg-slate-800 px-6 rounded-lg shadow-inner shadow-black zoom-in cursor-pointer hover:shadow-lg hover:shadow-black uppercase flex justify-center items-center">
            <span>
              <i className="fa-solid fa-wallet"></i>
            </span>
            <span className="ml-2">Create Wallet</span>
          </button>
        </div>
      </div>
    </>
  )
}
