export default function Settings() {
  const settingsSchema = [
    {
      groupTitle: "Transaction Settings",
      children: [
        {
          title: "Transaction Pin",
          icon: <i className="fa-solid fa-lock"></i>,
        },

        {
          title: "Transactions Limit",
          icon: <i className="fa-solid fa-circle-stop"></i>,
        },

        {
          title: "Beneficiaries",
          icon: <i className="fa-solid fa-users"></i>,
        },

        {
          title: "Statements",
          icon: <i className="fa-solid fa-clock-rotate-left"></i>,
        },
      ],
    },

    {
      groupTitle: "Application Settings",
      children: [
        {
          title: "Preferred Theme",
          icon: <i className="fa-solid fa-palette"></i>,
        },

        {
          title: "Privacy Mode",
          icon: <i className="fa-solid fa-mask"></i>,
        },

        {
          title: "Font Scaling",
          icon: <i className="fa-solid fa-font"></i>,
        },
      ],
    },

    {
      groupTitle: "Security Settings",
      children: [
        {
          title: "Sessions",
          icon: <i className="fa-solid fa-location-dot"></i>,
        },

        {
          title: "2FA/MFA Preferences",
          icon: <i className="fa-solid fa-shield-halved"></i>,
        },

        {
          title: "Timeout Lock",
          icon: <i className="fa-solid fa-hourglass-start"></i>,
        },
      ],
    },

    {
      groupTitle: "Notifications & Alerts",
      children: [
        {
          title: "Push Notifications",
          icon: <i className="fa-solid fa-bell"></i>,
        },

        {
          title: "Email Alerts",
          icon: <i className="fa-solid fa-envelope-open-text"></i>,
        },

        {
          title: "Newsletters",
          icon: <i className="fa-regular fa-message"></i>,
        },
      ],
    },

    {
      groupTitle: "About",
      children: [
        {
          title: "Feedback",
          icon: <i className="fa-solid fa-comment-dots"></i>,
        },

        {
          title: "Version",
          icon: <i className="fa-solid fa-code-branch"></i>,
        },

        {
          title: "Terms of Use",
          icon: <i className="fa-solid fa-handshake-simple"></i>,
        },

        {
          title: "Privacy",
          icon: <i className="fa-solid fa-gavel"></i>,
        },
      ],
    },
  ]
  return (
    <div className="flex flex-wrap border-red-500 h-full">
      <div className="w-full h-full xl:w-1/3 shadow-inner flex flex-col items-center gap-10 overflow-scroll">
        {/* Business Details */}
        <div className="h-1/3 w-full p-5 shadow-inner shadow-black bg-slate-900/10 flex flex-col justify-center items-center gap-3">
          {/* Gravatar */}
          <div className="bg-black rounded-full w-24 h-24 flex justify-center items-center">
            <i className="fa-solid fa-briefcase text-5xl"></i>
          </div>

          {/* Business Name */}
          <div className="uppercase font-bold text-lg">House Of David</div>

          {/* Business ID */}
          <div className="bg-black p-3 rounded shadow-black shadow-md cursor-pointer hover:bg-black/10 hover:shadow-inner hover:shadow-black ease-linear duration-200">
            P123456789ID
          </div>
        </div>

        {/* All Settings */}
        <div className="w-full flex flex-col gap-6">
          {settingsSchema.map((group, index) => {
            return (
              <div key={index} className="p-3 flex flex-col gap-4">
                {/* Title */}
                <div className="text-xs font-semibold">{group.groupTitle}</div>

                {/* Children */}
                {group.children.map((child, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-black ml-4 p-3 rounded-lg zoom-in cursor-pointer flex mt-2 shadow-black shadow-md">
                      <span>{child.icon}</span>
                      <span className="ml-2">{child.title}</span>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-full xl:w-2/3 bg-slate-900 shadow-inner shadow-black flex flex-col items-center gap-4 overflow-y-scroll h-full"></div>
    </div>
  )
}
