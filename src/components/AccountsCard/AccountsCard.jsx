import { useContext } from "react"
import { useState } from "react"
import {
  apiRequest,
  bankLogosRequiringWhiteBg,
} from "../../constants/helper-functions"
import { AppContext } from "../../contexts/AppContext"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import Actions from "../Actions/Actions"

export default function AccountsCard({ account }) {
  const { toastOptions, setToastOptions } = useContext(AppContext)
  const { getBankAccounts } = useContext(PayMakerAPIContext)

  const [editBusy, setEditBusy] = useState(false)
  const [deleteBusy, setDeleteBusy] = useState(false)
  const [activateBusy, setActivateBusy] = useState(false)
  const [deactivateBusy, setDeactivateBusy] = useState(false)

  async function deleteAccount() {
    setDeleteBusy(true)

    const deleteAccountRequest = await apiRequest(
      `business/bank-accounts/delete/${account.id}`,
      "delete"
    )

    const parsedToastOptions = {
      visible: true,
      lifespan: 5,
      visibilityHandlerFunc: () => {
        setToastOptions({ ...toastOptions, visible: false })
      },
    }

    if (deleteAccountRequest.status === 200) {
      parsedToastOptions.message = "Account Deleted Successfully"
      getBankAccounts()
    } else {
      parsedToastOptions.message =
        "An Error Occured. Account Could Not Be Deleted."
      parsedToastOptions.mode = 2
    }
    setToastOptions(parsedToastOptions)
    setDeleteBusy(false)
  }

  async function toggleAccountStatus(accountID, state) {
    setActivateBusy(true)
    setDeactivateBusy(true)
    if (!accountID || state === "") return
    const toggleAccountStatusRequest = await apiRequest(
      `business/bank-accounts/toggle/${accountID}?state=${state}`,
      "put"
    )

    const parsedToastOptions = {
      visible: true,
      lifespan: 5,
      visibilityHandlerFunc: () => {
        setToastOptions({ ...toastOptions, visible: false })
      },
    }

    if (toggleAccountStatusRequest.status === 200) {
      parsedToastOptions.message = "Account Status Updated Successfully"
      getBankAccounts()
    } else {
      parsedToastOptions.message =
        "An Error Occured. Account Status Could Not Be Updated."
      parsedToastOptions.mode = 2
    }
    setToastOptions(parsedToastOptions)
    setActivateBusy(false)
    setDeactivateBusy(false)
  }

  return (
    <div className="w-full rounded-md shadow-md shadow-black p-3 bg-slate-800 cursor-pointer flex flex-wrap gap-6 items-center hover:scale-[1.025] ease-linear duration-300 zoom-in">
      {/* Bank Logo */}
      <div
        className={`w-10 md:w-14 rounded-md overflow-hidden p-1 ${
          bankLogosRequiringWhiteBg.includes(account.bank_name) &&
          "bg-white p-2 h-10 md:h-14 flex flex-col justify-center items-center"
        }`}>
        <img
          src={`./assets/logos/${account.bank_name.replaceAll(" ", "")}.png`}
          // src="./assets/logos/GuarantyTrustBankPlc.png"
          alt="Bank"
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="grow h-full p-2 flex flex-col justify-around">
        <span className="text-xs md:text-sm lg:text-base whitespace-nowrap capitalize">
          {account.account_name && account.account_name.toLowerCase()}
        </span>
        <span className="text-xs md:text-sm lg:text-base">
          {account.bank_name} | {account?.account_number || ""}
        </span>
      </div>

      {/* Status */}
      <div
        className={`text-xs rounded-lg shadow-lg shadow-black px-4 py-1 font-bold ${
          Number(account.active) ? "bg-teal-500" : "bg-red-600"
        }`}>
        {Number(account.active) ? "ACTIVE" : "INACTIVE"}
      </div>

      {/* Actions */}
      <Actions
        editBusy={editBusy}
        activateBusy={activateBusy}
        deleteBusy={deleteBusy}
        deactivateBusy={deactivateBusy}
        deleteFunc={deleteAccount}
        activate={!Number(account.active)}
        activateFunc={() =>
          toggleAccountStatus(account.id, Number(account.active))
        }
        deactivateFunc={() =>
          toggleAccountStatus(account.id, Number(account.active))
        }
      />
    </div>
  )
}
