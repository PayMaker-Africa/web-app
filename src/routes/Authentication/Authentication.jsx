import { useState } from "react"
import SignIn from "../../components/SignIn/SignIn"
import "./Authentication.css"

export default function Authentication() {
  const [signIn, setSignIn] = useState(true)
  const [activeForm, setActiveForm] = useState(<SignIn />)
  return (
    <div className="shadow-inner shadow-black bg-slate-800 h-fit lg:h-full w-full flex flex-col justify-center items-center">
      {/* Forms Container */}
      <div className="w-full lg:w-3/4 xl:w-2/3 h-[55vh] bg-slate-900/30 flex flex-wrap justify-center items-center relative">
        {/* Sign In */}
        <div className="bg-slate-600 flex flex-col justify-center items-center gap-4 w-full lg:w-1/2 h-full">
          <span className="font-bold text-lg">Already Have an Account?</span>
          <span>
            <button
              className="bg-black/20 shadow-black shadow-inner p-3 rounded-md flex justify-center items-center hover:bg-black hover:shadow-md hover:shadow-black ease-linear duration-200"
              onClick={() => {
                setSignIn(() => !signIn)
                setActiveForm(() => <SignIn />)
              }}>
              <i className="fa-solid fa-right-to-bracket"></i>
              <span className="ml-2">Sign In</span>
            </button>
          </span>
        </div>

        {/* Sign Up */}
        <div className="bg-slate-900 flex flex-col justify-center items-center gap-4 w-full lg:w-1/2 h-full">
          <span className="font-bold text-lg">Don't Have an Account?</span>
          <span>
            <button
              className="bg-black/20 shadow-black shadow-inner p-3 rounded-md flex justify-center items-center hover:bg-black hover:shadow-md hover:shadow-black ease-linear duration-200"
              onClick={() => {
                setSignIn(() => !signIn)
                setActiveForm(() => "Register")
              }}>
              <i className="fa-solid fa-user-plus"></i>
              <span className="ml-2">Sign Up</span>
            </button>
          </span>
        </div>

        {/* Active Form */}
        <div
          className={`duration-300 ease-linear active-form h-[105%] bg-slate-900 w-full lg:w-[45%] absolute rounded-md shadow-black shadow-lg ${
            signIn ? "lg:left-7" : "lg:translate-x-[55%]"
          } `}>
          {activeForm}
        </div>
      </div>
    </div>
  )
}
