import CustomInput from "../../components/CustomInput/CustomInput"
import QRCard from "../../components/QRCard/QRCard"
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import { paymentCategories } from "../../constants/demoData"

export default function QR() {
  return (
    <div className="flex flex-wrap border-red-500 h-full">
      <div className="w-full xl:w-1/2 bg-slate-900 shadow-inner shadow-black rounded-md flex flex-col items-center gap-4 overflow-y-scroll h-full">
        {/* Universal */}
        <span className="mt-5">
          <SectionHeader title="Universal Business QR" />
        </span>
        <div
          className={`flex flex-col gap-2 overflow-hidden w-full md:w-[40%] mx-auto`}>
          <QRCard data={{ title: "House Of David" }} />
        </div>

        {/* Payment Categories */}
        <span className="mt-10">
          <SectionHeader title="Payment Categories QR" />
        </span>
        <div className="overflow-y-scroll p-3 w-full flex justify-around items-center flex-wrap gap-y-6">
          {paymentCategories.map((category, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col gap-2 overflow-hidden w-full md:w-[40%] mx-auto`}>
                <QRCard data={category} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Preview */}
      <div className="w-full h-full xl:w-1/2 shadow-inner flex flex-col items-center gap-10 overflow-scroll">
        {/* Card Preview */}
        <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center items-center rounded-lg shadow-black mt-10 mx-1 sm:mx-3 md:mx-5 overflow-hidden p-3 zoom-in cursor-pointer">
          <img
            src="https://picsum.photos/300"
            className="rounded-lg shadow-black shadow-lg"
          />
        </div>

        {/* Form */}
        <div className="bg-black/20 shadow-inner shadow-black w-full md:w-1/2 flex flex-col items-center mb-10 p-5">
          <span className="mb-3 uppercase underline underline-offset-4">
            Edit QR
          </span>

          <div className="w-full mb-5">
            <CustomInput placeholder="Card Number" />
          </div>

          <div className="w-full mb-5">
            <CustomInput placeholder="CVV" />
          </div>

          <div className="w-full mb-5">
            <CustomInput placeholder="Expiry Date" />
          </div>
        </div>
      </div>
    </div>
  )
}
