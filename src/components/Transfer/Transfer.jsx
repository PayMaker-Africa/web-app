import { useState } from "react"
import { useContext } from "react"
import { apiRequest } from "../../constants/helper-functions"
import { AppContext } from "../../contexts/AppContext"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import CustomInput from "../CustomInput/CustomInput"
import CustomSelect from "../CustomSelect/CustomSelect"
import Loader from "../Loader/Loader"

export default function Transfer() {
  const { toastOptions, setToastOptions } = useContext(AppContext)
  const { wallets, getWallets, getBusinessInfo } =
    useContext(PayMakerAPIContext)

  const [source, setSource] = useState("")
  const [transferTo, setTransferTo] = useState("")
  const [destination, setDestination] = useState("")
  const [recipient, setRecipient] = useState("")
  const [recipientName, setRecipientName] = useState("")
  const [amount, setAmount] = useState("")

  const [nameBusy, setNameBusy] = useState(false)
  const [submitBusy, setSubmitBusy] = useState(false)
  const [showRecipientName, setShowRecipientName] = useState(false)

  const [description, setDescription] = useState("")

  async function handleRecipientChange(value) {
    const parsedValue = value.toUpperCase()
    setRecipient(parsedValue)
    if (
      parsedValue.length === 12 &&
      (parsedValue[0] === "P" || parsedValue[0] === "B") &&
      parsedValue[parsedValue.length - 1] === "D" &&
      parsedValue[parsedValue.length - 2] === "I"
    ) {
      setShowRecipientName(true)
      setNameBusy(true)
      const retrieveRecipientNameRequest = await apiRequest(
        "username/" + parsedValue
      )
      if (retrieveRecipientNameRequest.status === 200) {
        setRecipientName(
          retrieveRecipientNameRequest.data.name ||
            retrieveRecipientNameRequest.data.first_name +
              " " +
              retrieveRecipientNameRequest.data.last_name ||
            "" + " " + retrieveRecipientNameRequest.data.other_names ||
            ""
        )
      } else {
        setRecipientName("Account Name Could Not Be Retrieved.")
      }
    } else {
      setShowRecipientName(false)
    }
    setNameBusy(false)
  }

  async function transfer(e) {
    e.preventDefault()
    setSubmitBusy(true)
    const formData = {
      type: transferTo,
      from: source,
      to: transferTo === "1" ? destination : recipient,
      amount,
      description,
    }

    const parsedToastOptions = {
      visible: true,
      lifespan: 5,
      visibilityHandlerFunc: () => {
        setToastOptions({ ...toastOptions, visible: false })
      },
    }

    const createTransactionRequest = await apiRequest(
      "transaction/create",
      "post",
      formData
    )

    if (createTransactionRequest.status === 200) {
      parsedToastOptions.message = "Transaction Completed Successfully"
      getWallets()
      getBusinessInfo()
      setSource("")
      setTransferTo("")
      setDestination("")
      setRecipient("")
      setRecipientName("")
      setAmount("")
      setDescription("")
    } else if (createTransactionRequest.status === 402) {
      parsedToastOptions.mode = 3
      parsedToastOptions.message = "Insufficient Funds!"
    } else {
      parsedToastOptions.message =
        "An Error Occured. Transaction Could Not Be Completed."
      parsedToastOptions.mode = 2
    }

    setToastOptions(parsedToastOptions)
    setSubmitBusy(false)
  }

  return (
    <>
      {/* Form */}
      <div className="grow">
        <form
          className="w-full p-3 flex flex-col gap-4 justify-between h-full"
          onSubmit={(e) => {
            transfer(e)
          }}>
          <div className="flex flex-col justify-between h-full gap-6 overflow-y-auto">
            {/* Source */}
            <div>
              <CustomSelect
                title="Transfer From"
                icon={<i className="fa-solid fa-wallet"></i>}
                value={source}
                changeHandlerFunc={setSource}
                options={
                  wallets
                    ? [
                        { title: "Main Wallet", value: "Main Wallet" },
                        ...wallets
                          .filter((wallet) => wallet.id !== recipient)
                          .map((wallet) => {
                            return {
                              title: wallet.title,
                              value: wallet.id,
                            }
                          }),
                      ]
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
                options={[
                  { title: "Between My Wallets", value: 1 },
                  { title: "External Wallet", value: 2 },
                ]}
              />
            </div>

            {/* Destination - Between My Wallets */}
            {transferTo === "1" && (
              <div>
                <CustomSelect
                  title="Destination Wallet"
                  icon={<i className="fa-solid fa-user"></i>}
                  options={
                    wallets
                      ? [
                          { title: "Main Wallet", value: "Main Wallet" },
                          ...wallets
                            .filter((wallet) => wallet.id !== source)
                            .map((wallet) => {
                              return {
                                title: wallet.title,
                                value: wallet.id,
                              }
                            }),
                        ]
                      : []
                  }
                  value={destination}
                  changeHandlerFunc={setDestination}
                />
              </div>
            )}

            {/* Recipient - External Wallet */}
            {transferTo === "2" && (
              <div className="h-14">
                <CustomInput
                  icon={<i className="fa-solid fa-money-bills"></i>}
                  placeholder="Recipient Wallet"
                  value={recipient}
                  handleValueChange={handleRecipientChange}
                />
              </div>
            )}

            {/* Recipient Name - External Wallet */}
            {showRecipientName &&
              transferTo === "2" &&
              (nameBusy ? (
                <span className="mx-auto">
                  <Loader />
                </span>
              ) : (
                <div className="h-14">
                  <CustomInput
                    icon={<i className="fa-solid fa-user"></i>}
                    placeholder="Recipient Name"
                    value={recipientName}
                    handleValueChange={setRecipientName}
                    readOnly
                  />
                </div>
              ))}

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

            {/* Description */}
            <div className="h-14">
              <CustomInput
                icon={<i className="fa-regular fa-file-lines"></i>}
                placeholder="Description"
                value={description}
                handleValueChange={setDescription}
              />
            </div>
          </div>

          {/* Button */}
          <div className="w-full flex justify-center items-center p-3">
            {submitBusy ? (
              <Loader />
            ) : (
              <button
                type="submit"
                className="py-3 bg-slate-800 px-6 rounded-lg shadow-inner shadow-black zoom-in cursor-pointer hover:shadow-lg hover:shadow-black uppercase flex justify-center items-center">
                <span>
                  <i className="fa-solid fa-paper-plane"></i>
                </span>
                <span className="ml-2">Transfer</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  )
}
