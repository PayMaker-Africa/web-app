import Actions from "../../components/Actions/Actions"
import CustomInput from "../../components/CustomInput/CustomInput"
import CustomSelect from "../../components/CustomSelect/CustomSelect"
import PaymentsCard from "../../components/PaymentsCard/PaymentsCard"
import { paymentCategories } from "../../constants/demoData"

export default function Payments() {
  return (
    <div className="flex flex-wrap border-red-500 h-full">
      {/* Add New Category */}
      <div className="w-full h-full xl:w-1/2 shadow-inner flex flex-col justify-center items-center gap-10 overflow-scroll">
        <div className="w-full md:w-1/2 mt-5 shadow-md shadow-black p-5 bg-black/50 h-1/2">
          <form className="h-full flex flex-col gap-6">
            {/* Title */}
            <div className="h-14">
              <CustomInput
                placeholder="Title"
                icon={<i className="fa-solid fa-diamond"></i>}
              />
            </div>

            {/* Category Color */}
            <div className="h-14">
              <CustomInput
                placeholder="Title"
                icon={<i className="fa-solid fa-droplet"></i>}
                type={"color"}
              />
            </div>

            {/* Payment Scheme */}
            <div className="h-14">
              <CustomSelect
                title="Payment Scheme"
                icon={<i className="fa-solid fa-water"></i>}
              />
            </div>

            {/* Default Account */}
            <div className="h-14">
              <CustomSelect
                title="Payment Account"
                icon={<i className="fa-solid fa-bank"></i>}
              />
            </div>
          </form>
        </div>
      </div>

      {/* Manage Categories */}
      <div className="w-full xl:w-1/2 bg-slate-900 shadow-inner shadow-black rounded-md flex flex-col items-center gap-4 overflow-y-scroll h-full">
        <div className="h-full overflow-scroll pt-5 w-full md:w-3/4 flex flex-col">
          {paymentCategories.map((category, index) => {
            return (
              <div
                key={index}
                className={`${
                  index > 0 && "mt-10"
                } rounded-lg mx-3 flex flex-col gap-2 mb-5`}>
                <PaymentsCard category={category} />

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
