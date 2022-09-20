import CustomInput from "../../components/CustomInput/CustomInput"
import QRCard from "../../components/QRCard/QRCard"
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import { paymentCategories } from "../../constants/demoData"
import QRCode from "react-qr-code"
import { useContext, useState } from "react"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import Loader from "../../components/Loader/Loader"
import { useEffect } from "react"

export default function QR() {
  const { businessInfo, paymentCategories } = useContext(PayMakerAPIContext)
  const [activeQRData, setActiveQRData] = useState(null)
  const selectedCardClass = "border-4 border-white p-3"

  useEffect(() => {
    businessInfo &&
      !activeQRData &&
      setActiveQRData(() => businessInfo.encoded_qr_data)
  }, [businessInfo])

  return (
    <div className="flex flex-wrap border-red-500 h-full">
      <div className="w-full xl:w-1/2 bg-slate-900 shadow-inner shadow-black rounded-md flex flex-col items-center gap-4 overflow-y-scroll h-full">
        {/* Business */}
        <span className="mt-5">
          <SectionHeader title="Business QR" />
        </span>
        <div
          className={`flex flex-col gap-2 overflow-hidden w-full md:w-[40%] mx-auto`}>
          {businessInfo ? (
            <span
              className={`ease-linear duration-100 ${
                businessInfo &&
                activeQRData === (businessInfo?.encoded_qr_data || "") &&
                selectedCardClass
              }`}
              onClick={() => {
                setActiveQRData(() => businessInfo?.encoded_qr_data || "")
              }}>
              <QRCard data={{ title: "House Of David" }} />
            </span>
          ) : (
            <Loader type={2} />
          )}
        </div>

        {/* Payment Categories */}
        <span className="mt-10">
          <SectionHeader title="Payment Categories QR" />
        </span>
        <div className="overflow-y-scroll p-3 w-full flex justify-around items-center flex-wrap gap-y-6">
          {paymentCategories &&
            paymentCategories.map((category, index) => {
              return (
                <div
                  key={index}
                  className={`ease-linear duration-100 flex flex-col gap-2 overflow-hidden w-full md:w-[40%] mx-auto ${
                    paymentCategories &&
                    activeQRData === category?.encoded_qr_data &&
                    selectedCardClass
                  }`}
                  onClick={() => {
                    setActiveQRData(() => category.encoded_qr_data)
                  }}>
                  <span className="ease-linear duration-300">
                    <QRCard data={category} />
                  </span>
                </div>
              )
            })}
        </div>
      </div>

      {/* Preview */}
      <div className="w-full h-full xl:w-1/2 shadow-inner flex flex-col items-center gap-10 overflow-scroll">
        {/* QR Preview */}
        <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center items-center rounded-lg shadow-black mt-10 mx-1 sm:mx-3 md:mx-5">
          {activeQRData ? (
            <QRCode
              value={activeQRData}
              level="L"
              className="zoom-in cursor-pointer shadow-lg shadow-black rounded-md"
            />
          ) : (
            <Loader type={1} />
          )}
        </div>

        {/* Form */}
        <div className="bg-black/20 shadow-inner shadow-black w-full md:w-1/2 flex flex-col items-center mb-10 p-5">
          <span className="mb-3 uppercase underline underline-offset-4">
            QR Code Options
          </span>

          <div className="w-full mb-5 cursor-pointer">
            <CustomInput placeholder="Business Logo" />
          </div>

          <div className="w-full mb-5 cursor-pointer">
            <CustomInput placeholder="PayMaker Logo" />
          </div>

          <div className="w-full mb-5 cursor-pointer">
            <CustomInput placeholder="Text" />
          </div>

          <div className="w-full mb-5 cursor-pointer flex justify-center">
            <button className="bg-black p-3 shadow-md shadow-black rounded-md hover:shadow-inner hover:shadow-black hover:bg-black/20 duration-200 ease-linear">
              Save QR Options
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
