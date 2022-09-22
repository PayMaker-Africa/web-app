import { useContext, useState } from "react"
import { AppContext } from "../../contexts/AppContext"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import CustomInput from "../CustomInput/CustomInput"
import Loader from "../Loader/Loader"
import { apiRequest } from "../../constants/helper-functions"

export default function SignIn() {
  const { authenticated, setAuthenticated } = useContext(AppContext)

  // Form Input States
  const [authID, setAuthID] = useState("B123456789ID")
  const [username, setUsername] = useState("drey")
  const [password, setPassword] = useState("Rainbow6Siege@@")

  // Form Button Busy State
  const [formIsBusy, setFormIsBusy] = useState(false)

  const [showStatusMessage, setShowStatusMessage] = useState(false)
  const [statusCode, setStatusCode] = useState(0)
  const [statusMessage, setStatusMessage] = useState("")

  async function handleFormSubmit(e) {
    e.preventDefault()
    setFormIsBusy(true)
    const formData = {
      business: authID,
      auth_id: username.toLowerCase(),
      password: password,
    }

    const userInfoRequest = await apiRequest("login/business", "post", formData)
    // console.log(userInfoRequest)

    if (userInfoRequest && userInfoRequest.status === 200) {
      localStorage.setItem("bearer-token", userInfoRequest.data.token)
      setStatusCode(1)
      setStatusMessage("Authentication Success... Preparing Your Dashboard...")
      setTimeout(() => {
        setAuthenticated(true)
        setFormIsBusy(false)
      }, 2000)
    } else {
      setStatusCode(0)
      setStatusMessage("Login Credentials Invalid. Please Try Again.")
      setFormIsBusy(false)
    }
    setShowStatusMessage(true)
  }

  return (
    <div
      className="w-full h-full shadow-inner shadow-black flex flex-col justify-center items-center p-3"
      onSubmit={(e) => handleFormSubmit(e)}>
      {/* Status */}
      {showStatusMessage && (
        <div
          className={`mt-10 w-fit rounded-lg shadow-lg shadow-black p-3 text-sm ${
            statusCode ? "bg-teal-700" : "bg-red-500"
          }`}>
          {statusMessage}
        </div>
      )}

      {/* Form */}
      <form className="w-[90%] 2xl:w-3/4 flex flex-col justify-evenly h-full mt-10">
        {/* Form Fields */}
        <div className="flex flex-col gap-10">
          {/* Halt AutoFill On Firefox */}
          <input type="text" className="hidden" />
          <input type="password" className="hidden" />

          {/* Authentication ID */}
          <div className="h-16">
            <CustomInput
              placeholder="PayMaker ID | Phone | Email"
              icon={<i className="fa-solid fa-mobile"></i>}
              value={authID}
              handleValueChange={setAuthID}
              autoComplete="new-password"
              required
              autoFocus
            />
          </div>

          {/* Admin Username */}
          <div className="h-16">
            <CustomInput
              placeholder="Username"
              icon={<i className="fa-solid fa-user-tie"></i>}
              value={username}
              handleValueChange={setUsername}
              autoComplete="new-password"
              required
            />
          </div>

          {/* Password */}
          <div className="h-16">
            <CustomInput
              placeholder="Password"
              icon={<i className="fa-solid fa-key"></i>}
              type="password"
              value={password}
              handleValueChange={setPassword}
              autoComplete="new-password"
              required
            />
          </div>
        </div>

        {/* Button */}
        <div className="self-center mt-10">
          {formIsBusy ? (
            <Loader />
          ) : (
            <button className="flex justify-center items-center bg-black/70 shadow-black shadow-lg px-6 py-3 rounded-lg hover:shadow-inner hover:bg-black/10 hover:shadow-black ease-linear duration-500 font-semibold">
              <span>
                <i className="fa-solid fa-right-to-bracket"></i>
              </span>
              <span className="ml-2">Sign In</span>
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
