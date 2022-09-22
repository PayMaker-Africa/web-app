import { useContext, useState } from "react"
import CustomInput from "../../components/CustomInput/CustomInput"
import CustomSelect from "../../components/CustomSelect/CustomSelect"
import Loader from "../../components/Loader/Loader"
import PaymentsCard from "../../components/PaymentsCard/PaymentsCard"
import { apiRequest } from "../../constants/helper-functions"
import { AppContext } from "../../contexts/AppContext"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"

export default function Payments() {
  const { toastOptions, setToastOptions } = useContext(AppContext)
  const { paymentCategories, getPaymentCategories, bankAccounts } =
    useContext(PayMakerAPIContext)

  const [title, setTitle] = useState("")
  const [color, setColor] = useState("")
  const [paymentScheme, setPaymentScheme] = useState("")
  const [amount, setAmount] = useState("")
  const [minAmount, setMinAmount] = useState("")
  const [maxAmount, setMaxAmount] = useState("")
  const [account, setAccount] = useState("")
  const [description, setDescription] = useState("")

  const [pageBusy, setPageBusy] = useState(false)

  async function addCategory(e) {
    e.preventDefault()

    setPageBusy(true)
    const formData = {
      title,
      color,
      type: paymentScheme,
      amount: parseFloat(amount),
      min_amount: minAmount.length ? parseFloat(minAmount) : 0,
      max_amount: maxAmount.length ? parseFloat(maxAmount) : 0,
      default_account: account,
      description,
    }

    const parsedToastOptions = {
      visible: true,
      lifespan: 5,
      visibilityHandlerFunc: () => {
        setToastOptions({ ...toastOptions, visible: false })
      },
    }

    const addCardRequest = await apiRequest(
      "business/payment-categories/add",
      "post",
      formData
    )
    if (addCardRequest.status === 201) {
      getPaymentCategories()
      parsedToastOptions.message = "Payment Category Added Successfully"
      setTitle("")
      setColor("")
      setPaymentScheme("")
      setAmount("")
      setMinAmount("")
      setMaxAmount("")
      setAccount("")
      setDescription("")
    } else {
      parsedToastOptions.message =
        "An Error Occured. Payment Category Could Not Be Created."
      parsedToastOptions.mode = 2
    }
    setToastOptions(parsedToastOptions)
    setPageBusy(false)
  }

  return (
    <div className="flex flex-wrap border-red-500 h-full">
      {/* Add New Category */}
      <div className="w-full h-full xl:w-1/2 shadow-inner flex flex-col justify-center items-center gap-10 overflow-auto">
        <div className="w-full md:w-[65%] mt-5 shadow-md shadow-black p-5 bg-black/50 h-fit">
          <form
            className="h-full flex flex-col gap-6 justify-between mt-7"
            onSubmit={addCategory}>
            {/* Title */}
            <div className="h-14">
              <CustomInput
                placeholder="Title"
                icon={<i className="fa-solid fa-diamond"></i>}
                value={title}
                handleValueChange={setTitle}
                required
              />
            </div>

            {/* Category Color */}
            <div className="h-14">
              <CustomInput
                placeholder="Color"
                icon={<i className="fa-solid fa-droplet"></i>}
                type={"color"}
                value={color}
                handleValueChange={setColor}
                required
              />
            </div>

            {/* Payment Scheme */}
            <div className="h-14">
              <CustomSelect
                title="Payment Scheme"
                icon={<i className="fa-solid fa-water"></i>}
                value={paymentScheme}
                changeHandlerFunc={setPaymentScheme}
                options={["None", "Fixed", "Range"]}
                required
              />
            </div>

            {/* Fixed Amount */}
            {paymentScheme === "Fixed" && (
              <div className="h-14">
                <CustomInput
                  placeholder="Amount"
                  icon={<i className="fa-solid fa-money-bill"></i>}
                  value={amount}
                  handleValueChange={setAmount}
                />
              </div>
            )}

            {/* Miniumum Amount */}
            {paymentScheme === "Range" && (
              <div className="h-14">
                <CustomInput
                  placeholder="Minimum Amount"
                  icon={<i className="fa-solid fa-money-bill"></i>}
                  value={minAmount}
                  handleValueChange={setMinAmount}
                />
              </div>
            )}

            {/* Maximum Amount */}
            {paymentScheme === "Range" && (
              <div className="h-14">
                <CustomInput
                  placeholder="Maximum Amount"
                  icon={<i className="fa-solid fa-money-bill"></i>}
                  value={maxAmount}
                  handleValueChange={setMaxAmount}
                />
              </div>
            )}

            {/* Default Account */}
            <div className="h-14">
              <CustomSelect
                title="Payment Account"
                icon={<i className="fa-solid fa-bank"></i>}
                value={account}
                changeHandlerFunc={setAccount}
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

            {/* Description */}

            <div className="h-14">
              <CustomInput
                placeholder="Description"
                icon={<i className="fa-solid fa-money-bill"></i>}
                value={description}
                handleValueChange={setDescription}
              />
            </div>

            {/* Button */}
            <div className="w-full mb-10 flex justify-center items-center">
              {pageBusy ? (
                <Loader type={1} />
              ) : (
                <button className="flex justify-center items-center py-2 px-4 bg-black/50 rounded-md shadow-inner shadow-black hover:bg-black hover:shadow-black hover:scale-105 hover:shadow-lg duration-300 ease-linear">
                  <span>
                    <i className="fa-solid fa-layer-group"></i>
                  </span>
                  <span className="ml-2">Add Category</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Manage Categories */}
      <div className="w-full xl:w-1/2 bg-slate-900 shadow-inner shadow-black rounded-md flex flex-col items-center gap-4 overflow-y-auto h-full">
        <div className="h-full overflow-auto pt-5 w-full md:w-3/4 flex flex-col">
          {paymentCategories ? (
            paymentCategories
              .filter((category) => !Number(category.deleted))
              .map((category, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      index > 0 && "mt-10"
                    } rounded-lg mx-3 flex flex-col gap-2 mb-5`}>
                    <PaymentsCard category={category} />
                  </div>
                )
              })
          ) : (
            <div className="h-full w-full flex justify-center items-center">
              <Loader type={1} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
