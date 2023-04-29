import { useState } from "react"
import { useContext } from "react"
import CustomInput from "../../components/CustomInput/CustomInput"
import CustomSelect from "../../components/CustomSelect/CustomSelect"
import Loader from "../../components/Loader/Loader"
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import UsersCard from "../../components/UsersCard/UsersCard"
import { apiRequest } from "../../constants/helper-functions"
import { AppContext } from "../../contexts/AppContext"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"

export default function Users() {
  const { toastOptions, setToastOptions } = useContext(AppContext)
  const { businessUsers, getBusinessUsers } = useContext(PayMakerAPIContext)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [businessRole, setBusinessRole] = useState("")
  const [accessLevel, setAccessLevel] = useState("")

  const [pageBusy, setPageBusy] = useState(false)

  async function addUser(e) {
    e.preventDefault()

    setPageBusy(true)
    const formData = {
      username: username.toLowerCase(),
      password,
      password_confirmation: confirmPassword,
      first_name: firstName,
      last_name: lastName,
      role: accessLevel,
      business_role: businessRole,
    }

    const parsedToastOptions = {
      visible: true,
      lifespan: 5,
      visibilityHandlerFunc: () => {
        setToastOptions({ ...toastOptions, visible: false })
      },
    }

    const addUserRequest = await apiRequest(
      "business/users/add",
      "post",
      formData
    )
    if (addUserRequest.status === 201) {
      getBusinessUsers()
      parsedToastOptions.message = "New User Added Successfully"
      setFirstName("")
      setLastName("")
      setUsername("")
      setPassword("")
      setConfirmPassword("")
      setBusinessRole("")
      setAccessLevel("")
    } else {
      parsedToastOptions.message =
        "An Error Occured. New User Could Not Be Added."
      parsedToastOptions.mode = 2
    }
    setToastOptions(parsedToastOptions)
    setPageBusy(false)
  }

  return (
    <div className="flex flex-wrap border-red-500 h-full">
      {/* Add New User */}
      <div className="w-full h-full xl:w-1/2 shadow-inner flex flex-col justify-center items-center gap-10 overflow-auto">
        <SectionHeader title="Add New User" />
        <div className="w-full md:w-[65%] shadow-md shadow-black p-5 bg-black/50">
          <form
            className="h-full flex flex-col gap-6"
            autoComplete="off"
            onSubmit={(e) => addUser(e)}>
            {/* First Name */}
            <div className="h-14">
              <CustomInput
                placeholder="First Name"
                icon={<i className="fa-solid fa-person"></i>}
                value={firstName}
                handleValueChange={setFirstName}
              />
            </div>

            {/* Last Name */}
            <div className="h-14">
              <CustomInput
                placeholder="Last Name"
                icon={<i className="fa-solid fa-person"></i>}
                value={lastName}
                handleValueChange={setLastName}
              />
            </div>

            {/* Username */}
            <div className="h-14">
              <CustomInput
                placeholder="Username"
                icon={<i className="fa-solid fa-user"></i>}
                value={username}
                handleValueChange={setUsername}
                autoComplete="new-password"
              />
            </div>

            {/* Password */}
            <div className="h-14">
              <CustomInput
                placeholder="Password"
                icon={<i className="fa-solid fa-key"></i>}
                type={"password"}
                value={password}
                handleValueChange={setPassword}
                autoComplete="new-password"
              />
            </div>

            {/* Confirm Password */}
            <div className="h-14">
              <CustomInput
                placeholder="Confirm Password"
                icon={<i className="fa-solid fa-key"></i>}
                type={"password"}
                value={confirmPassword}
                handleValueChange={setConfirmPassword}
                autoComplete="new-password"
              />
            </div>

            {/* Business Role */}
            <div className="h-14">
              <CustomInput
                placeholder="Business Role"
                icon={<i className="fa-solid fa-circle-nodes"></i>}
                value={businessRole}
                handleValueChange={setBusinessRole}
              />
            </div>

            {/* Access Level */}
            <div className="h-14">
              <CustomSelect
                title="Access Level"
                icon={<i className="fa-solid fa-layer-group"></i>}
                value={accessLevel}
                changeHandlerFunc={setAccessLevel}
                options={[
                  { title: "Admin", value: 1 },
                  { title: "Assitant", value: 2 },
                  { title: "User", value: 3 },
                  { title: "Custom", value: 0 },
                ]}
              />
            </div>

            {/* Submit */}
            <div className="w-full flex justify-center items-center">
              {pageBusy ? (
                <Loader />
              ) : (
                <button className="flex items-center justify-center bg-slate-800 cursor-pointer p-3 rounded-lg hover:shadow-inner hover:shadow-black shadow-black shadow-md zoom-in">
                  <i className="fa-solid fa-user"></i>
                  <span className="ml-2"> Create User </span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Manage Users */}
      <div className="w-full xl:w-1/2 bg-slate-900 shadow-inner shadow-black rounded-md flex flex-col items-center gap-4 overflow-y-auto h-full">
        <div className="h-full overflow-auto pt-5 w-full md:w-3/4 flex flex-col">
          {businessUsers ? (
            businessUsers
              .filter((user) => !Number(user.deleted))
              .map((user, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      index > 0 && "mt-10"
                    } rounded-lg mx-3 flex flex-col gap-2 mb-5`}>
                    <UsersCard user={user} />
                  </div>
                )
              })
          ) : (
            <span className="w-full h-full flex flex-col justify-center items-center">
              <Loader />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
