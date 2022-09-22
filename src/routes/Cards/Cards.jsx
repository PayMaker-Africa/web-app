import { useContext } from "react"
import { useState } from "react"
import Actions from "../../components/Actions/Actions"
import CreditCard from "../../components/CreditCard/CreditCard"
import CustomInput from "../../components/CustomInput/CustomInput"
import Loader from "../../components/Loader/Loader"
import { apiRequest } from "../../constants/helper-functions"
import { Issuer } from "../../constants/Issuer"
import { AppContext } from "../../contexts/AppContext"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"

export default function Cards() {
  const { toastOptions, setToastOptions } = useContext(AppContext)
  const { cards, getCards } = useContext(PayMakerAPIContext)

  const [number, setNumber] = useState("")
  const [cvv, setCVV] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [issuer, setIssuer] = useState(null)
  const [brand, setBrand] = useState(null)

  const [pageBusy, setPageBusy] = useState(false)

  function handleCardNumberChange(value) {
    value.length < 17 && !isNaN(value) && setNumber(value)

    let cardInfo
    if (value.length >= 6) {
      cardInfo = Issuer.issuerData(parseInt(String(value).substring(0, 6)))
      if (cardInfo) {
        setBrand(() => cardInfo.brand)
        setIssuer(() => cardInfo.issuer.replace(".", ""))
      }
    } else {
      setBrand(null)
      setIssuer(null)
      return
    }
  }

  async function addCard(e) {
    e.preventDefault()

    if (
      !brand ||
      !issuer ||
      !cvv ||
      expiryDate.length < 4 ||
      number.length < 16
    ) {
      return
    }

    setPageBusy(true)
    const formData = {
      number,
      expiry_date: expiryDate,
      cvv,
      issuer,
      brand,
    }

    const parsedToastOptions = {
      visible: true,
      lifespan: 5,
      visibilityHandlerFunc: () => {
        setToastOptions({ ...toastOptions, visible: false })
      },
    }

    const addCardRequest = await apiRequest("cards/add", "post", formData)
    if (addCardRequest.status === 200) {
      getCards()
      parsedToastOptions.message = "Card Added Successfully"
    } else {
      parsedToastOptions.message =
        "An Error Occured. Card Status Could Not Be Updated."
      parsedToastOptions.mode = 2
    }
    setToastOptions(parsedToastOptions)
    setPageBusy(false)
    setBrand(null)
    setIssuer(null)
    setNumber("")
    setCVV("")
    setExpiryDate("")
  }

  return (
    <div className="flex flex-wrap border-red-500 h-full">
      {/* Add Card */}
      <div className="w-full h-full xl:w-1/2 shadow-inner flex flex-col items-center gap-10 overflow-auto">
        {/* Card Preview */}
        <div className="h-[40%] w-full sm:w-3/4 md:w-2/3 flex justify-center items-center rounded-lg shadow-black mt-10 mx-1 sm:mx-3 md:mx-5">
          <CreditCard
            card={{
              number,
              cvv,
              expiry_date: expiryDate,
              issuer,
              brand,
            }}
            showActions={false}
          />
        </div>

        {/* Form */}
        <div className="bg-black/20 shadow-inner shadow-black p-3 w-full md:w-1/2 flex flex-col items-center mb-10">
          <span className="mb-3 uppercase underline underline-offset-4">
            Add New Card
          </span>
          <form
            onSubmit={(e) => {
              addCard(e)
            }}
            className="w-full grow justify-between flex flex-col p-3">
            <div className="w-full mb-5">
              <CustomInput
                placeholder="Card Number"
                value={number}
                handleValueChange={handleCardNumberChange}
                autoFocus
              />
            </div>

            <div className="w-full mb-5">
              <CustomInput
                placeholder="CVV"
                value={cvv}
                handleValueChange={setCVV}
                type={number}
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
              {pageBusy ? (
                <Loader type={1} />
              ) : (
                <button
                  type="submit"
                  className="flex justify-center items-center py-2 px-4 bg-black/50 rounded-md shadow-inner shadow-black hover:bg-black hover:shadow-lg zoom-in">
                  <span>
                    <i className="fa-regular fa-credit-card"></i>
                  </span>
                  <span className="ml-2">Add Card</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Manage Cards */}
      <div className="w-full xl:w-1/2 bg-slate-900 shadow-inner shadow-black rounded-md flex flex-col items-center gap-4 overflow-y-auto h-full">
        <div className="h-full overflow-y-auto p-3 w-full">
          {cards &&
            cards
              .filter((card) => !Number(card.deleted))
              .map((card, index) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-col gap-4 h-72 md:h-[22rem] overflow-hidden w-full md:w-3/4 mx-auto ${
                      index > 0 && "mt-10"
                    }`}>
                    <CreditCard card={card} />
                  </div>
                )
              })}
        </div>
      </div>
    </div>
  )
}
