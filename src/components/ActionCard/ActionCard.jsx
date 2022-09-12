import CustomInput from "../CustomInput/CustomInput"
import CustomSelect from "../CustomSelect/CustomSelect"

export default function ActionCard({
  title = "",
  form = "",
  buttonText = "Submit",
  buttonColor = "",
  buttonColorDepth = 200,
}) {
  return (
    <div className="p-3 rounded-lg shadow-md shadow-black w-full h-full flex flex-col justify-between items-center bg-slate-900 gap-4">
      {/* Title */}
      <div className="flex justify-center uppercase font-quicksand font-bold underline underline-offset-8">
        {title}
      </div>

      {/* Form */}
      <div className="grow w-full p-3 flex flex-col gap-4 justify-between">
        {/* Title */}
        <div className="h-14">
          <CustomInput
            icon={<i class="fa-regular fa-id-badge text-xl"></i>}
            placeholder="Wallet Title"
          />
        </div>

        {/* Opening Balance */}
        <div className="h-14">
          <CustomInput
            icon={<i class="fa-solid fa-money-bills"></i>}
            placeholder="Opening Balance"
            type="number"
          />
        </div>

        {/* Type */}
        <div>
          <CustomSelect title="Wallet Type" />
        </div>

        {/* Color */}
        <div className="h-14">
          <CustomInput
            icon={<i class="fa-solid fa-droplet"></i>}
            type="color"
          />
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center items-center p-3">
        <button className="py-3 bg-slate-800 px-6 rounded-lg shadow-inner shadow-black zoom-in cursor-pointer hover:shadow-lg hover:shadow-black uppercase">
          Submit
        </button>
      </div>
    </div>
  )
}
