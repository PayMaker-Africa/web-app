import CustomInput from "../CustomInput/CustomInput"

export default function SignUp() {
  return (
    <div className="w-full h-full shadow-inner shadow-black flex flex-col items-center p-3">
      <form className="w-[90%] 2xl:w-3/4 mt-5 flex flex-col justify-between">
        {/* Form Fields */}
        <div className="flex flex-col gap-6">
          <input type="text" className="hidden" />
          <input type="password" className="hidden" />
          {/* Phone */}
          <div className="h-12">
            <CustomInput
              placeholder="Phone Number"
              icon={<i className="fa-solid fa-mobile"></i>}
            />
          </div>

          {/* Business Name */}
          <div className="h-12">
            <CustomInput
              placeholder="Business Name"
              icon={<i className="fa-solid fa-briefcase"></i>}
            />
          </div>

          {/* Admin Username */}
          <div className="h-12">
            <CustomInput
              placeholder="Admin Username"
              icon={<i className="fa-solid fa-user-tie"></i>}
            />
          </div>

          {/* Password */}
          <div className="h-12">
            <CustomInput
              placeholder="Password"
              icon={<i className="fa-solid fa-user-tie"></i>}
              type="password"
            />
          </div>

          {/* Confirm Password */}
          <div className="h-12">
            <CustomInput
              placeholder="Confirm Password"
              icon={<i className="fa-solid fa-user-tie"></i>}
              type="password"
            />
          </div>
        </div>

        {/* Button */}
        <div className="mx-auto grow mt-10">
          <button className="flex justify-center items-center bg-black/70 shadow-black shadow-lg px-6 py-3 rounded-lg hover:shadow-inner hover:bg-black/10 hover:shadow-black ease-linear duration-500 font-semibold">
            <span>
              <i className="fa-solid fa-door-open"></i>
            </span>
            <span className="ml-2">Sign Up</span>
          </button>
        </div>
      </form>
    </div>
  )
}
