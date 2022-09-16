import { useEffect, useState, useContext } from "react"
import Layout from "./components/Layout/Layout"
import { AppContext } from "./contexts/AppContext"
import { BrowserRouter } from "react-router-dom"
import Authentication from "./routes/Authentication/Authentication"

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [tabs, setTabs] = useState([])
  const [authenticated, setAuthenticated] = useState(false)

  // Toggle Dark Theme
  useEffect(() => {
    darkTheme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }, [darkTheme])

  return authenticated ? (
    <>
      <BrowserRouter>
        <AppContext.Provider
          value={{
            authenticated,
            setAuthenticated,
            darkTheme,
            setDarkTheme,
            tabs,
          }}>
          <Layout />
        </AppContext.Provider>
      </BrowserRouter>
    </>
  ) : (
    <Authentication />
  )
}
