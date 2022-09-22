import { useState } from "react"
import { useContext } from "react"
import AccountsCard from "../../components/AccountsCard/AccountsCard"
import CustomInput from "../../components/CustomInput/CustomInput"
import CustomSelect from "../../components/CustomSelect/CustomSelect"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import { Nuban } from "../../constants/nubanValidator"
import { useEffect } from "react"
import Loader from "../../components/Loader/Loader"
import { apiRequest, makeAPIRequest } from "../../constants/helper-functions"
import { AppContext } from "../../contexts/AppContext"

export default function Accounts({}) {
  const { toastOptions, setToastOptions } = useContext(AppContext)
  const { bankAccounts, getBankAccounts } = useContext(PayMakerAPIContext)
  const [banks, setBanks] = useState(() => Nuban.allBanks())
  const [bank, setBank] = useState(banks[0].name)
  const [accountNumber, setAccountNumber] = useState("")
  const [accountName, setAccountName] = useState("")

  const [showStatus, setShowStatus] = useState(false)
  const [statusCode, setStatusCode] = useState(0)
  const [statusMessage, setStatusMessage] = useState(
    "Account Number Must Be 10 Digits"
  )

  const [pageIsBusy, setPageIsBusy] = useState(false)

  function handleAccountNumberChange(value) {
    if (value.length < 11 && !isNaN(value)) {
      setAccountNumber(value)
    }
  }

  async function validateAccountDetails(bank, accountNumber) {
    // Check Account Number && Bank Length/Syntax
    if (
      !accountNumber ||
      accountNumber.length !== 10 ||
      isNaN(accountNumber) ||
      !Nuban.allBanks().some(
        (currentBank) => currentBank.name.toUpperCase() === bank.toUpperCase()
      )
    ) {
      return
    }

    if (!Nuban.possibleBanks(accountNumber).includes(bank)) {
      setStatusCode(0)
      setStatusMessage(`Account Number Does Not Exist For Selected Bank.`)
      return
    }

    setPageIsBusy(true)
    const accountDetailsRequest = await makeAPIRequest(
      `nuban/${accountNumber}?bank_code=${Nuban.bankCode(bank)}`
    )

    if (accountDetailsRequest[0].account_name) {
      setAccountName(accountDetailsRequest[0].account_name)
      setStatusMessage(accountDetailsRequest[0].account_name)
      setStatusCode(1)
    } else {
      setStatusMessage("Error Retrieving Account Name.")
      setStatusCode(0)
    }
    setPageIsBusy(false)
  }

  async function addAccount(e) {
    e.preventDefault()
    if (
      !accountName ||
      accountNumber.length !== 10 ||
      isNaN(accountNumber) ||
      !bank ||
      !bank.length
    ) {
      return
    }

    const formData = {
      bank_name: bank,
      account_number: accountNumber,
      account_name: accountName,
    }

    setPageIsBusy(true)

    const addAccountRequest = await apiRequest(
      "business/bank-accounts/add",
      "post",
      formData
    )

    const parsedToastOptions = {
      visible: true,
      lifespan: 5,
      visibilityHandlerFunc: () => {
        setToastOptions({ ...toastOptions, visible: false })
      },
    }

    if (addAccountRequest.status === 201) {
      setStatusCode(1)
      setStatusMessage("Account Added Successfully.")
      getBankAccounts()
      parsedToastOptions.message = "Account Added Successfully."
    } else {
      setStatusCode(0)
      setStatusMessage("An Error Occured! Account Not Added.")
      parsedToastOptions.message = "An Error Occured! Account Not Added."
      parsedToastOptions.mode = 2
    }

    setToastOptions(parsedToastOptions)
    setPageIsBusy(false)

    setTimeout(() => {
      setStatusMessage("Account Number Must Be 10 Digits.")
      setAccountName("")
      setAccountNumber("")
      setBank(banks[0].name)
    }, 3000)

    // console.log(addAccountRequest)
  }

  useEffect(() => {
    if (bank && accountNumber && accountNumber.length === 10) {
      validateAccountDetails(bank, accountNumber)
    } else {
      setStatusCode(0)
      setPageIsBusy(false)
      setStatusMessage("Account Number Must Be 10 Digits")
    }
  }, [bank, accountNumber])

  return (
    <div className="flex flex-wrap border-red-500 h-full">
      {/* Add Account */}

      <div className="w-full xl:w-1/2 shadow-inner flex justify-center items-center mb-10">
        <form className="" onSubmit={(e) => addAccount(e)}>
          <div className="bg-slate-500 p-5 h-96 w-96 mt-10 rounded-lg shadow-md shadow-black flex flex-col gap-8">
            {/* Title */}
            <div className="flex justify-center items-center uppercase underline underline-offset-4 font-sen font-bold text-lg ">
              Add New Account
            </div>

            {/* Status Message */}
            {pageIsBusy ? (
              <span className="w-full flex justify-center items-center">
                <Loader type={2} />
              </span>
            ) : (
              <div
                className={`flex justify-center text-xs ${
                  statusCode ? "bg-teal-600" : "bg-red-900"
                } rounded-lg p-3 font-semibold ease-linear duration-300`}>
                {statusMessage}
              </div>
            )}

            {/* Select Bank */}
            <CustomSelect
              icon={<i className="fa-solid fa-building-columns"></i>}
              title="Select Bank"
              options={banks.map((bank) => bank.name)}
              value={bank}
              changeHandlerFunc={(value) => {
                setBank(value)
              }}
            />

            {/* Account Number */}
            <div className="h-14">
              <CustomInput
                icon={<i className="fa-solid fa-arrow-up-9-1"></i>}
                placeholder="Account Number"
                type="number"
                value={accountNumber}
                handleValueChange={(value) => {
                  handleAccountNumberChange(value)
                }}
              />
            </div>

            {/* Button */}
            <div className="w-full flex justify-center items-center">
              {pageIsBusy ? (
                <Loader />
              ) : (
                <button className="flex gap-1 justify-center items-center py-3 px-6 rounded-md shadow-inner shadow-black bg-slate-900 zoom-in hover:shadow-md hover:shadow-black uppercase">
                  <span>
                    <i className="fa-solid fa-building-columns"></i>
                  </span>
                  <span className="ml-2">Add Bank Account</span>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Manage Accounts */}
      <div className="w-full xl:w-1/2 bg-slate-900 shadow-inner shadow-black rounded-md p-3 flex flex-col gap-4 overflow-y-auto h-full">
        {bankAccounts &&
          bankAccounts.map((account, index) => {
            return (
              <div
                key={index}
                className={`p-5 w-[85%] mx-auto ${index > 0 && "mt-5"}`}>
                <AccountsCard account={account} />
              </div>
            )
          })}
      </div>
    </div>
  )
}
