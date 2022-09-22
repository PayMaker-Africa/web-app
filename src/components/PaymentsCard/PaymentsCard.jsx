import { useContext, useState } from "react"
import { apiRequest, currency } from "../../constants/helper-functions"
import { AppContext } from "../../contexts/AppContext"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import Actions from "../Actions/Actions"

export default function PaymentsCard({ category }) {
  const { toastOptions, setToastOptions } = useContext(AppContext)
  const { paymentCategories, getPaymentCategories } =
    useContext(PayMakerAPIContext)

  const [editBusy, setEditBusy] = useState(false)
  const [deleteBusy, setDeleteBusy] = useState(false)
  const [activateBusy, setActivateBusy] = useState(false)
  const [deactivateBusy, setDeactivateBusy] = useState(false)

  async function deleteCategory() {
    setDeleteBusy(true)

    const deleteCategoryRequest = await apiRequest(
      `business/payment-categories/delete/${category.id}`,
      "delete"
    )

    const parsedToastOptions = {
      visible: true,
      lifespan: 5,
      visibilityHandlerFunc: () => {
        setToastOptions({ ...toastOptions, visible: false })
      },
    }

    if (deleteCategoryRequest.status === 200) {
      parsedToastOptions.message = "Payment Category Deleted Successfully"
      getPaymentCategories()
    } else {
      parsedToastOptions.message =
        "An Error Occured. Payment Category Could Not Be Deleted."
      parsedToastOptions.mode = 2
    }
    setToastOptions(parsedToastOptions)
    setDeleteBusy(false)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="shadow-inner shadow-black p-5 bg-black/50 w-full rounded-lg flex gap-4 zoom-in cursor-pointer">
        {/* Color */}
        <div
          className={`w-2 h-full`}
          style={{ background: category?.color }}></div>

        {/* Title */}
        <div className="w-full flex flex-col gap-2">
          <span className="w-full border-b pb-2">{category.title}</span>
          <span className="capitalize">
            {category?.type ? category.type + " | " : "Default Payment Scheme"}
            {category?.amount ? currency(category.amount) + " | " : ""}
            {category?.minAmount ? currency(category.minAmount) + " | " : ""}
            {category?.maxAmount ? currency(category.maxAmount) : ""}
          </span>
        </div>

        {/* Details */}
        <div className=""></div>
      </div>
      {/* Actions */}
      <Actions
        editBusy={editBusy}
        deleteBusy={deleteBusy}
        deleteFunc={deleteCategory}
      />
    </div>
  )
}
