import { useEffect, useState, useContext } from "react"
import Layout from "./components/Layout/Layout"
import { AppContext } from "./contexts/AppContext"
import { BrowserRouter } from "react-router-dom"

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [tabs, setTabs] = useState([])

  // Toggle Dark Theme
  useEffect(() => {
    darkTheme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }, [darkTheme])

  return (
    <>
      <BrowserRouter>
        <AppContext.Provider value={{ darkTheme, setDarkTheme, tabs }}>
          <Layout />
        </AppContext.Provider>
      </BrowserRouter>
    </>
  )
}
