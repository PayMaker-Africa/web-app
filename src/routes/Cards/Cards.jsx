import CreditCard from "../../components/CreditCard/CreditCard"
import CustomInput from "../../components/CustomInput/CustomInput"
import { cards } from "../../constants/demoData"

export default function Cards() {
  return (
    <div className="flex flex-wrap border-red-500 h-full">
      {/* Add Card */}
      <div className="w-full h-full xl:w-1/2 shadow-inner flex flex-col items-center gap-10 overflow-scroll">
        {/* Card Preview */}
        <div className="h-[40%] w-full sm:w-3/4 md:w-2/3 flex justify-center items-center rounded-lg shadow-black mt-10 mx-1 sm:mx-3 md:mx-5">
          <CreditCard card={cards[0]} />
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
              <CustomInput placeholder="Card Number" />
            </div>

            <div className="w-full mb-5">
              <CustomInput placeholder="CVV" />
            </div>

            <div className="w-full mb-5">
              <CustomInput placeholder="Expiry Date" />
            </div>

            <div className="w-full mb-10 flex justify-center items-center">
              <button className="flex justify-center items-center py-2 px-4 bg-black/50 rounded-md shadow-inner shadow-black">
                <span>
                  <i class="fa-regular fa-credit-card"></i>
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
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col gap-4 overflow-hidden w-full md:w-3/4 mx-auto ${
                  index > 0 && "mt-10"
                }`}>
                <CreditCard card={card} />
                {/* Actions */}
                <div className="flex gap-4 justify-around p-3 items-center text-xl w-full bg-black/50 shadow-inner shadow-black rounded-md">
                  <span className="bg-sky-600 rounded-md shadow-lg shadow-black p-3 flex justify-center items-center text-xs md:text-sm">
                    <i className="fa-solid fa-pencil"></i>
                  </span>
                  <span className="bg-red-500 rounded-md shadow-lg shadow-black p-3 flex justify-center items-center text-xs md:text-sm">
                    <i className="fa-solid fa-trash-can"></i>
                  </span>
                  <span className="bg-red-900 rounded-md shadow-lg shadow-black p-3 flex justify-center items-center text-xs md:text-sm">
                    <i className="fa-solid fa-ban"></i>
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
