import CustomInput from "../CustomInput/CustomInput"
import CustomSelect from "../CustomSelect/CustomSelect"

export default function Transfer() {
  return (
    <>
      {/* Form */}
      <div className="grow w-full p-3 flex flex-col gap-4 justify-between h-full">
        {/* Source */}
        <div>
          <CustomSelect
            title="Transfer From"
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Destination */}
        <div>
          <CustomSelect
            title="Transfer To"
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Sub Source */}
        <div>
          <CustomSelect
            title="Account"
            icon={<i className="fa-solid fa-user"></i>}
          />
        </div>

        {/* Amount */}
        <div className="h-14">
          <CustomInput
            icon={<i className="fa-solid fa-money-bills"></i>}
            placeholder="Amount"
            type="number"
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
