import { useContext, useState } from "react"
import { AppContext } from "../../contexts/AppContext"
import NavBar from "../NavBar/NavBar"
import { Routes, Route } from "react-router-dom"
import Tab from "../Tab/Tab"
import Home from "../../routes/Home/Home"
import Wallet from "../../routes/Wallet/Wallet"
import Accounts from "../../routes/Accounts/Accounts"
import Cards from "../../routes/Cards/Cards"
import Payments from "../../routes/Payments/Payments"
import Analytics from "../../routes/Analytics/Analytics"
import Users from "../../routes/Users/Users"
import QR from "../../routes/QR/QR"
import Settings from "../../routes/Settings/Settings"
import Support from "../../routes/Support/Support"
import Authentication from "../../routes/Authentication/Authentication"

export default function Layout({ children }) {
  const { darkTheme, setDarkTheme, tabs } = useContext(AppContext)
  const [pageContents, setPageContents] = useState("Home")

  return (
    <div className="h-full flex font-sen">
      {/* NavBar */}
      <NavBar />

      {/* Header & Main Contents */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Header */}
        <div className="dark:bg-slate-900 rounded-tl-lg mt-4 flex justify-between items-center">
          {/* Tabs */}
          <div className="flex gap-2 cursor-pointer items-end self-end w-3/4 overflow-scroll flex-nowrap">
            <Tab
              icon={<i className="fa-solid fa-house text-2xs"></i>}
              header="Home"
            />
            <Tab
              icon={<i className="fa-solid fa-house text-2xs"></i>}
              header="Wallet"
            />
          </div>

          {/* Utilities */}
          <div className="flex justify-end items-center gap-3 mx-3 mb-3">
            {/* Search Bar */}
            <div className="rounded-lg dark:bg-stone-500 w-full hidden md:flex items-center justify-between">
              {/* Search Category */}
              <div className="flex items-center mx-3">
                <i className="fa-solid fa-magnifying-glass text-2xs"></i>
                <select
                  name=""
                  className="bg-transparent text-sm outline-none border-none">
                  <option value="" className="bg-slate-900">
                    Transactions
                  </option>
                  <option value="" className="bg-slate-900">
                    Accounts
                  </option>
                  <option value="" className="bg-slate-900">
                    Categories
                  </option>
                  <option value="" className="bg-slate-900">
                    Users
                  </option>
                  <option value="" className="bg-slate-900">
                    Settings
                  </option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="p-2 bg-transparent dark:text-white dark:placeholder:text-white focus:border-l focus:outline-none border-l"
              />
            </div>

            {/* Theme Toggle */}
            <span
              className="text-xl 2xl:text-2xl dark:rotate-180 ease-linear duration-300 cursor-pointer"
              onClick={() => {
                setDarkTheme(() => !darkTheme)
              }}>
              <i className="fa-solid fa-circle-half-stroke"></i>
            </span>

            {/* Profile Image */}
            <span className="w-8 cursor-pointer zoom-in">
              <img
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                alt=""
                className="object-cover rounded-lg"
              />
            </span>
          </div>
        </div>

        {/* Main Contents */}
        <div className="dark:bg-slate-800 flex-1 h-full max-h-full overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/users" element={<Users />} />
            <Route path="/qr" element={<QR />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
            <Route path="/logout" element={<Authentication />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
