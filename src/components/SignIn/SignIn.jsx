import CustomInput from "../CustomInput/CustomInput"

export default function SignIn() {
  return (
    <div className="w-full h-full shadow-inner shadow-black flex flex-col items-center p-3">
      <form className="w-3/4 mt-5 flex flex-col gap-6">
        {/* Phone */}
        <div className="h-12">
          <CustomInput
            placeholder="Phone Number"
            icon={<i class="fa-solid fa-mobile"></i>}
          />
        </div>

        {/* Business Name */}
        <div className="h-12">
          <CustomInput
            placeholder="Business Name"
            icon={<i class="fa-solid fa-briefcase"></i>}
          />
        </div>

        {/* Admin Username */}
        <div className="h-12">
          <CustomInput
            placeholder="Admin Username"
            icon={<i class="fa-solid fa-user-tie"></i>}
          />
        </div>

        {/* Password */}
        <div className="h-12">
          <CustomInput
            placeholder="Password"
            icon={<i class="fa-solid fa-user-tie"></i>}
            type="password"
          />
        </div>

        {/* Confirm Password */}
        <div className="h-12">
          <CustomInput
            placeholder="Confirm Password"
            icon={<i class="fa-solid fa-user-tie"></i>}
            type="password"
          />
        </div>
      </form>
    </div>
  )
}
