import { useContext, useState } from "react"
import {
  apiRequest,
  bankLogosRequiringWhiteBg,
  formatCardNumber,
} from "../../constants/helper-functions"
import { AppContext } from "../../contexts/AppContext"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import Actions from "../Actions/Actions"

export default function CreditCard({
  card = {},
  showActions = true,
  showStatus = true,
}) {
  const { toastOptions, setToastOptions } = useContext(AppContext)
  const { cards, getCards } = useContext(PayMakerAPIContext)

  const [editBusy, setEditBusy] = useState(false)
  const [deleteBusy, setDeleteBusy] = useState(false)
  const [activateBusy, setActivateBusy] = useState(false)
  const [deactivateBusy, setDeactivateBusy] = useState(false)

  async function deleteCard() {
    setDeleteBusy(true)

    const deleteCardRequest = await apiRequest(
      `cards/delete/${card.id}`,
      "delete"
    )

    const parsedToastOptions = {
      visible: true,
      lifespan: 5,
      visibilityHandlerFunc: () => {
        setToastOptions({ ...toastOptions, visible: false })
      },
    }

    if (deleteCardRequest.status === 200) {
      parsedToastOptions.message = "Card Deleted Successfully"
      getCards()
    } else {
      parsedToastOptions.message =
        "An Error Occured. Card Could Not Be Deleted."
      parsedToastOptions.mode = 2
    }
    setToastOptions(parsedToastOptions)
    setDeleteBusy(false)
  }

  async function toggleCardStatus() {
    setActivateBusy(true)
    setDeactivateBusy(true)

    const toggleCardStatusRequest = await apiRequest(
      `cards/update/${card.id}`,
      "put"
    )

    const parsedToastOptions = {
      visible: true,
      lifespan: 5,
      visibilityHandlerFunc: () => {
        setToastOptions({ ...toastOptions, visible: false })
      },
    }

    if (toggleCardStatusRequest.status === 200) {
      parsedToastOptions.message = "Card Status Updated Successfully"
      getCards()
    } else {
      parsedToastOptions.message =
        "An Error Occured. Card Status Could Not Be Deleted."
      parsedToastOptions.mode = 2
    }
    setToastOptions(parsedToastOptions)
    setActivateBusy(false)
    setDeactivateBusy(false)
  }

  return (
    <div
      className="bg-black/50 flex-1 h-full flex flex-col justify-around cursor-pointer rounded-lg shadow-black shadow-md py-4 px-2 text-xs md:text-base lg:text-lg 2xl:text-xl hover:scale-[0.95] ease-linear duration-300"
      style={{
        backgroundImage: `url('./assets/bgs/${
          card.issuer ? card.issuer.replaceAll(" ", "") : ""
        }.png')`,
      }}>
      {/* Status & Bank */}
      <div className="flex justify-between items-center p-3">
        {showStatus && (
          <span
            className={`text-xs px-4 py-1 rounded-lg shadow-black shadow-lg  font-bold ${
              Number(card.active) ? "bg-teal-500" : "bg-red-600"
            }`}>
            {Number(card.active) ? "ACTIVE" : "INACTIVE"}
          </span>
        )}
        {card.issuer && (
          <span
            className={`w-12 sm:w-16 md:w-20 ${
              bankLogosRequiringWhiteBg.includes(card?.issuer) &&
              "p-2 bg-white rounded-md shadow-black shadow-lg"
            }`}>
            <img
              src={`./assets/logos/${
                card.issuer ? card.issuer.replaceAll(" ", "") : ""
              }.png`}
              alt="Bank"
              className="object-cover"
            />
          </span>
        )}
      </div>

      {/* Number & CVV */}
      <div className="flex justify-between items-center">
        {/* Number */}
        <span className="ml-2 font-bold">{formatCardNumber(card.number)}</span>

        {/* CVV */}
        <span className="p-5">
          {card.cvv && card.cvv[0] !== "0" && card.cvv.length && card.cvv < 100
            ? "0" + card.cvv
            : card.cvv}
        </span>
      </div>

      {/* Name, Expiry Date & Processor */}
      <div className="flex justify-between px-2">
        {/* Name */}
        <span>{card.name}</span>
        {/* Expiry Date */}
        <span className="flex flex-col justify-end items-center text-sm">
          <span className="">Valid Thru</span>
          <span>{card.expiry_date}</span>
        </span>
        {/* Processor */}
        {card.brand ? (
          <span className="w-8 sm:w-12 md:w-16">
            <img
              src={`./assets/logos/${card.brand ? card.brand : ""}.png`}
              alt="Brand"
              className="object-cover"
            />
          </span>
        ) : (
          <span></span>
        )}
      </div>

      {/* Actions */}
      {showActions && (
        <Actions
          editBusy={editBusy}
          activateBusy={activateBusy}
          deleteBusy={deleteBusy}
          deactivateBusy={deactivateBusy}
          deleteFunc={deleteCard}
          activate={!Number(card.active)}
          activateFunc={() => toggleCardStatus(card.id, Number(card.active))}
          deactivateFunc={() => toggleCardStatus(card.id, Number(card.active))}
        />
      )}
    </div>
  )
}
