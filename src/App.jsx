import { useLayoutEffect } from "react"
import { useEffect, useState } from "react"
import Layout from "./components/Layout/Layout"
import Loader from "./components/Loader/Loader"
import { apiRequest } from "./constants/helper-functions"
import { AppContext } from "./contexts/AppContext"
import { PayMakerAPIContext } from "./contexts/PayMakerAPIContext"
import Authentication from "./routes/Authentication/Authentication"

export default function App() {
  // Session Token
  const [bearerToken, setBearerToken] = useState(() =>
    localStorage.getItem("bearer-token")
  )

  const [pageBusy, setPageBusy] = useState(true)

  const [authenticated, setAuthenticated] = useState(false)

  // API Call & State Update Function
  async function makeAPIRequest(
    url,
    stateHandlerFunc,
    method = "get",
    data = {}
  ) {
    const request = await apiRequest(url)
    if (request.data) {
      stateHandlerFunc(request.data)
      return true
    }
    return false
  }

  // Get User Info
  const [userInfo, setUserInfo] = useState({})
  async function getUserInfo() {
    const requestResult = await makeAPIRequest(
      "business/users/current",
      setUserInfo
    )
    setAuthenticated(requestResult)
  }

  const [businessInfo, setBusinessInfo] = useState({})
  async function getBusinessInfo() {
    makeAPIRequest("business/view", setBusinessInfo)
  }

  const [darkTheme, setDarkTheme] = useState(true)
  const [tabs, setTabs] = useState([])

  useLayoutEffect(() => {
    async function invokeGetUserInfo() {
      await getUserInfo()
      setPageBusy(false)
    }

    async function invokeAPICalls() {
      getBusinessInfo()
    }

    invokeGetUserInfo()

    authenticated && invokeAPICalls()
  }, [])

  // Toggle Dark Theme
  useEffect(() => {
    darkTheme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }, [darkTheme])

  return pageBusy ? (
    <div className="border w-full h-full flex justify-center items-center">
      <Loader />
    </div>
  ) : (
    <>
      <AppContext.Provider
        value={{
          authenticated,
          setAuthenticated,
          darkTheme,
          setDarkTheme,
          tabs,
        }}>
        <PayMakerAPIContext.Provider
          value={{
            // States
            userInfo,
            businessInfo,

            // State Handler Functions
            getUserInfo,
            getBusinessInfo,

            // Miscs
          }}>
          {authenticated ? <Layout /> : <Authentication />}
        </PayMakerAPIContext.Provider>
      </AppContext.Provider>
    </>
  )
}
