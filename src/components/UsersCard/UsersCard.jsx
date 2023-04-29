import { useContext, useState } from "react"
import { apiRequest } from "../../constants/helper-functions"
import { AppContext } from "../../contexts/AppContext"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import Actions from "../Actions/Actions"
import SectionHeader from "../SectionHeader/SectionHeader"

export default function UsersCard({ user }) {
  const { toastOptions, setToastOptions } = useContext(AppContext)
  const { businessUsers, getBusinessUsers } = useContext(PayMakerAPIContext)

  const [editBusy, setEditBusy] = useState(false)
  const [deleteBusy, setDeleteBusy] = useState(false)
  const [activateBusy, setActivateBusy] = useState(false)
  const [deactivateBusy, setDeactivateBusy] = useState(false)

  async function deleteUser() {
    setDeleteBusy(true)

    const deleteUserRequest = await apiRequest(
      `business/users/delete/${user.id}`,
      "delete"
    )

    const parsedToastOptions = {
      visible: true,
      lifespan: 5,
      visibilityHandlerFunc: () => {
        setToastOptions({ ...toastOptions, visible: false })
      },
    }

    if (deleteUserRequest.status === 200) {
      parsedToastOptions.message = "User Deleted Successfully"
      getBusinessUsers()
    } else {
      parsedToastOptions.message =
        "An Error Occured. User Could Not Be Deleted."
      parsedToastOptions.mode = 2
    }
    setToastOptions(parsedToastOptions)
    setDeleteBusy(false)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="shadow-black shadow-inner flex items-center p-4 rounded-lg gap-4 hover:bg-black ease-linear duration-200 cursor-pointer hover:scale-[1.025]">
        <div className="w-full flex gap-3">
          {/* Profile Image */}
          <div className="w-12 rounded-md shadow-black shadow-lg overflow-hidden">
            <img src="https://picsum.photos/200" className="object-cover" />
          </div>

          {/* User Info */}
          <div className="flex flex-col grow">
            <span className="w-full border-b pb-2">{`${user?.first_name} ${user?.last_name}`}</span>
            <span className="text-xs md:text-sm mt-1">{`${user?.username} | ${
              user?.email ? user?.email.toLowerCase() : ""
            }`}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <Actions
        editBusy={editBusy}
        deleteBusy={deleteBusy}
        deleteFunc={deleteUser}
      />
    </div>
  )
}
