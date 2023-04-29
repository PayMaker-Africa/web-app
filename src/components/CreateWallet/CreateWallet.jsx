import { useContext, useState } from "react"
import { apiRequest } from "../../constants/helper-functions"
import { AppContext } from "../../contexts/AppContext"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import CustomInput from "../CustomInput/CustomInput"
import CustomSelect from "../CustomSelect/CustomSelect"
import Loader from "../Loader/Loader"

export default function CreateWallet() {
  const { toastOptions, setToastOptions } = useContext(AppContext)
  const { walletTypes, getWallets, getBusinessInfo } =
    useContext(PayMakerAPIContext)

  const [title, setTitle] = useState("")
  const [openingBalance, setOpeningBalance] = useState(0)
  const [type, setType] = useState("")
  const [color, setColor] = useState("")

  const [pageBusy, setPageBusy] = useState(false)

  async function createWallet(e) {
    e.preventDefault()

    setPageBusy(true)
    const formData = {
      title,
      type,
      initial_amount: openingBalance,
    }

    const parsedToastOptions = {
      visible: true,
      lifespan: 5,
      visibilityHandlerFunc: () => {
        setToastOptions({ ...toastOptions, visible: false })
      },
    }

    const createWalletRequest = await apiRequest(
      "wallet/create",
      "post",
      formData
    )
    if (createWalletRequest.status === 201) {
      getWallets()
      getBusinessInfo()
      parsedToastOptions.message = "New Wallet Created Successfully"
      setTitle("")
      setOpeningBalance("")
      setType("")
      setColor("")
    } else {
      parsedToastOptions.message =
        "An Error Occured. Wallet Could Not Be Created."
      parsedToastOptions.mode = 2
    }
    setToastOptions(parsedToastOptions)
    setPageBusy(false)
  }

  return (
    <>
      {/* Form */}
      <div className="grow">
        <form
          className="w-full h-full p-3 flex flex-col gap-4 justify-between"
          onSubmit={(e) => createWallet(e)}>
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
            {pageBusy ? (
              <Loader />
            ) : (
              <button
                type="submit"
                className="py-3 bg-slate-800 px-6 rounded-lg shadow-inner shadow-black zoom-in cursor-pointer hover:shadow-lg hover:shadow-black uppercase flex justify-center items-center">
                <span>
                  <i className="fa-solid fa-wallet"></i>
                </span>
                <span className="ml-2">Create Wallet</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  )
}
