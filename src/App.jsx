import { useLayoutEffect } from "react"
import { useEffect, useState } from "react"
import Layout from "./components/Layout/Layout"
import Loader from "./components/Loader/Loader"
import { apiRequest, makeAPIRequest } from "./constants/helper-functions"
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
  useLayoutEffect(() => {
    async function invokeGetUserInfo() {
      await getUserInfo()
      setPageBusy(false)
    }

    invokeGetUserInfo()
  }, [])

  // Business User Info
  const [userInfo, setUserInfo] = useState({})
  async function getUserInfo() {
    const requestResult = await makeAPIRequest(
      "business/users/current",
      setUserInfo
    )
    setAuthenticated(requestResult)
  }

  // Business Info
  const [businessInfo, setBusinessInfo] = useState({})
  async function getBusinessInfo() {
    makeAPIRequest("business/view", setBusinessInfo)
  }

  // Today's Transactions
  const [todayTransactions, setTodayTransactions] = useState(null)
  async function getTodayTransactions() {
    makeAPIRequest("transactions/past/0", setTodayTransactions)
  }

  // Recent Transactions - Past 7 Days
  const [recentTransactions, setRecentTransactions] = useState(null)
  async function getRecentTransactions() {
    makeAPIRequest("transactions/past/7", setRecentTransactions)
  }

  // This Week's Transactions
  const [thisWeekTransactions, setThisWeekTransactions] = useState(null)
  async function getThisWeekTransactions() {
    makeAPIRequest(
      "transactions/past/" + new Date().getDay(),
      setThisWeekTransactions
    )
  }

  // Current Month's Transactions
  const [thisMonthTransactions, setThisMonthTransactions] = useState(null)
  async function getThisMonthTransactions() {
    makeAPIRequest("transactions/month/current", setThisMonthTransactions)
  }

  // Transactions - Past 31 Days
  const [past31DaysTransactions, setPast31DaysTransactions] = useState(null)
  async function getPast31DaysTransactions() {
    makeAPIRequest("transactions/past/31", setPast31DaysTransactions)
  }

  // Bank Accounts
  const [bankAccounts, setBankAccounts] = useState(null)
  async function getBankAccounts() {
    makeAPIRequest("business/bank-accounts/all", setBankAccounts)
  }

  // Payment Categories
  const [paymentCategories, setPaymentCategories] = useState(null)
  async function getPaymentCategories() {
    makeAPIRequest("business/payment-categories/all", setPaymentCategories)
  }

  // Users
  const [businessUsers, setBusinessUsers] = useState(null)
  async function getBusinessUsers() {
    makeAPIRequest("business/users/all", setBusinessUsers)
  }

  // Wallets
  const [wallets, setWallets] = useState(null)
  async function getWallets() {
    makeAPIRequest("wallet-types/user/all", setWallets)
  }

  // Wallet Types
  const [walletTypes, setWalletTypes] = useState([])
  async function getWalletTypes() {
    makeAPIRequest("wallet-types/all", setWalletTypes)
  }

  // Cards
  const [cards, setCards] = useState(null)
  async function getCards() {
    makeAPIRequest("cards/all", setCards)
  }

  const [darkTheme, setDarkTheme] = useState(true)
  const [tabs, setTabs] = useState([])

  useEffect(() => {
    async function invokeAPICalls() {
      getBusinessInfo()
      getTodayTransactions()
      getRecentTransactions()
      getThisWeekTransactions()
      getThisMonthTransactions()
      getPast31DaysTransactions()
      getBankAccounts()
      getPaymentCategories()
      getBusinessUsers()
      getWallets()
      getWalletTypes()
      getCards()
    }

    authenticated && invokeAPICalls()
  }, [authenticated])

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
            todayTransactions,
            recentTransactions,
            thisWeekTransactions,
            thisMonthTransactions,
            past31DaysTransactions,
            bankAccounts,
            paymentCategories,
            businessUsers,
            wallets,
            walletTypes,
            cards,

            // State Handler Functions
            getUserInfo,
            getBusinessInfo,
            getTodayTransactions,
            getRecentTransactions,
            getThisWeekTransactions,
            getThisMonthTransactions,
            getPast31DaysTransactions,
            getBankAccounts,
            getPaymentCategories,
            getBusinessUsers,
            getWallets,
            getWalletTypes,
            getCards,

            // Miscs
          }}>
          {authenticated ? <Layout /> : <Authentication />}
        </PayMakerAPIContext.Provider>
      </AppContext.Provider>
    </>
  )
}
