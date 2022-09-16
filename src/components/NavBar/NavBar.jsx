import { useState } from "react"
import NavItem from "../NavItem/NavItem"
import { Link } from "react-router-dom"

export default function NavBar({ hidden }) {
  const navbarSchema = [
    {
      title: "Wallet",
      icon: <i className="fa-solid fa-wallet"></i>,
      color: "text-green-500",
    },

    {
      title: "Accounts",
      icon: <i className="fa-solid fa-building-columns"></i>,
      color: "text-sky-500",
    },

    {
      title: "Cards",
      icon: <i className="fa-solid fa-credit-card"></i>,
      color: "text-indigo-500",
    },

    {
      title: "Payments",
      icon: <i className="fa-solid fa-layer-group"></i>,
      color: "text-yellow-500",
    },

    {
      title: "Analytics",
      icon: <i className="fa-solid fa-chart-line"></i>,
      color: "text-lime-500",
    },

    {
      title: "Users",
      icon: <i className="fa-solid fa-users"></i>,
      color: "text-sky-600",
    },

    {
      title: "QR",
      icon: <i className="fa-solid fa-qrcode"></i>,
      color: "text-white",
    },

    {
      title: "Settings",
      icon: <i className="fa-solid fa-gears"></i>,
      color: "text-blue-400",
    },

    {
      title: "Support",
      icon: <i className="fa-solid fa-headset"></i>,
      color: "text-cyan-400",
    },

    {
      title: "Logout",
      icon: <i className="fa-solid fa-power-off"></i>,
      color: "text-red-500",
    },
  ]

  const [activeNavItem, setActiveNavItem] = useState(0)
  const [navBarShown, setNavBarShown] = useState(true)
  // const [hideAll, setHideAll] = useState(false)

  return (
    <>
      {/* Small & Medium Screen NavBar Toggle */}
      <div
        className={`${
          !navBarShown ? "flex" : "hidden"
        } absolute left-0 z-10 text-2xl top-1/2 font-bold lg:hidden`}
        onClick={() => {
          setNavBarShown(() => true)
        }}>
        <i className="fa-solid fa-square-caret-right"></i>
      </div>

      {/* NavBar */}
      <div
        className={`${
          navBarShown
            ? "flex overflow-x-hidden left-0 top-0 bg-slate-900 absolute lg:static h-full overflow-y-scroll z-10"
            : "hidden lg:flex"
        }`}>
        {/* Mini NavBar */}
        <div className="flex flex-col gap-4 bg-slate-900 items-center overflow-scroll justify-between h-full flex-shrink-0">
          {/* Home */}
          <Link to={`/`} className="w-full">
            <NavItem
              icon={
                <span className="flex items-center justify-center font-extrabold text-xl 2xl:text-2xl ">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </span>
              }
              isActive={activeNavItem === 0}
              onClickFunc={() => setActiveNavItem(() => 0)}
            />
          </Link>

          {/* Nav Items */}
          <div className="overflow-y-scroll">
            {navbarSchema.map((navItem, index) => {
              return (
                <Link
                  key={index}
                  to={`${navItem.title ? navItem.title.toLowerCase() : "/"}`}
                  className="w-full">
                  <NavItem
                    icon={navItem.icon}
                    title={navItem.title}
                    isActive={activeNavItem > 0 && index === activeNavItem - 1}
                    onClickFunc={() => setActiveNavItem(() => index + 1)}
                    color={navItem.color}
                  />
                </Link>
              )
            })}
          </div>

          {/* Toggle Sidebar */}
          <div
            onClick={() => {
              setNavBarShown(() => !navBarShown)
            }}>
            <i
              className={`fa-solid fa-square-caret-${
                navBarShown ? "left" : "right"
              } text-2xl cursor-pointer`}></i>
          </div>
        </div>

        {/* Extended NavBar */}
        <div
          className={`${
            navBarShown ? "w-60" : "w-0"
          } bg-slate-700 ease-linear duration-200 overflow-hidden`}>
          <div className="p-3"></div>
        </div>
      </div>
    </>
  )
}
