import { useContext } from "react"
import { useState } from "react"
import Actions from "../../components/Actions/Actions"
import CreditCard from "../../components/CreditCard/CreditCard"
import CustomInput from "../../components/CustomInput/CustomInput"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"

export default function Cards() {
  const { cards } = useContext(PayMakerAPIContext)

  const [number, setNumber] = useState("")
  const [cvv, setCVV] = useState("")
  const [expiryDate, setExpiryDate] = useState("")

  return (
    <div className="flex flex-wrap border-red-500 h-full">
      {/* Add Card */}
      <div className="w-full h-full xl:w-1/2 shadow-inner flex flex-col items-center gap-10 overflow-scroll">
        {/* Card Preview */}
        <div className="h-[40%] w-full sm:w-3/4 md:w-2/3 flex justify-center items-center rounded-lg shadow-black mt-10 mx-1 sm:mx-3 md:mx-5">
          <CreditCard
            card={{
              number,
              cvv,
              expiry_date: expiryDate,
            }}
          />
        </div>

        {/* Form */}
        <div className="bg-black/20 shadow-inner shadow-black p-3 w-full md:w-1/2 flex flex-col items-center mb-10">
          <span className="mb-3 uppercase underline underline-offset-4">
            Add New Card
          </span>
          <form
            action=""
            className="w-full grow justify-between flex flex-col p-3">
            <div className="w-full mb-5">
              <CustomInput
                placeholder="Card Number"
                value={number}
                handleValueChange={setNumber}
                autoFocus
              />
            </div>

            <div className="w-full mb-5">
              <CustomInput
                placeholder="CVV"
                value={cvv}
                handleValueChange={setCVV}
              />
            </div>

            <div className="w-full mb-5">
              <CustomInput
                placeholder="Expiry Date"
                value={expiryDate}
                handleValueChange={setExpiryDate}
              />
            </div>

            <div className="w-full mb-10 flex justify-center items-center">
              <button className="flex justify-center items-center py-2 px-4 bg-black/50 rounded-md shadow-inner shadow-black">
                <span>
                  <i className="fa-regular fa-credit-card"></i>
                </span>
                <span className="ml-2">Add Card</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Manage Cards */}
      <div className="w-full xl:w-1/2 bg-slate-900 shadow-inner shadow-black rounded-md flex flex-col items-center gap-4 overflow-y-scroll h-full">
        <div className="h-full overflow-y-scroll p-3 w-full">
          {cards &&
            cards.map((card, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-4 h-72 md:h-[22rem] overflow-hidden w-full md:w-3/4 mx-auto ${
                    index > 0 && "mt-10"
                  }`}>
                  <CreditCard card={card} />

                  {/* Actions */}
                  <Actions />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
