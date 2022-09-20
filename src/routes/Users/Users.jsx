import { useState } from "react"
import { useContext } from "react"
import Actions from "../../components/Actions/Actions"
import CustomInput from "../../components/CustomInput/CustomInput"
import CustomSelect from "../../components/CustomSelect/CustomSelect"
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import UsersCard from "../../components/UsersCard/UsersCard"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"

export default function Users() {
  const { businessUsers } = useContext(PayMakerAPIContext)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [businessRole, setBusinessRole] = useState("")
  const [accessLevel, setAccessLevel] = useState("")

  return (
    <div className="flex flex-wrap border-red-500 h-full">
      {/* Add New User */}
      <div className="w-full h-full xl:w-1/2 shadow-inner flex flex-col justify-center items-center gap-10 overflow-scroll">
        <SectionHeader title="Add New User" />
        <div className="w-full md:w-[65%] shadow-md shadow-black p-5 bg-black/50">
          <form className="h-full flex flex-col gap-6" autoComplete="off">
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
              <button className="flex items-center justify-center bg-slate-800 cursor-pointer p-3 rounded-lg hover:shadow-inner hover:shadow-black shadow-black shadow-md zoom-in">
                <i className="fa-solid fa-user"></i>
                <span className="ml-2"> Create User </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Manage Users */}
      <div className="w-full xl:w-1/2 bg-slate-900 shadow-inner shadow-black rounded-md flex flex-col items-center gap-4 overflow-y-scroll h-full">
        <div className="h-full overflow-scroll pt-5 w-full md:w-3/4 flex flex-col">
          {businessUsers &&
            businessUsers.map((user, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index > 0 && "mt-10"
                  } rounded-lg mx-3 flex flex-col gap-2 mb-5`}>
                  <UsersCard user={user} />

                  {/* Actions */}
                  <Actions />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
