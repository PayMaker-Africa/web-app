import { useContext } from "react"
import DataCard from "../../components/DataCard/DataCard"
import Loader from "../../components/Loader/Loader"
import RenderChart from "../../components/RenderChart/RenderChart"
import TransactionsHistory from "../../components/TransactionsHistory/TransactionsHistory"
import { currency } from "../../constants/helper-functions"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"
import "./Home.css"

export default function Home() {
  const {
    businessInfo,
    bankAccounts,
    paymentCategories,
    businessUsers,
    todayTransactions,
    thisMonthTransactions,
  } = useContext(PayMakerAPIContext)

  return (
    <>
      <div className="flex flex-wrap mt-3 mx-1">
        {/* Left Column */}
        <div className="flex flex-col gap-4 flex-[2] flex-wrap basis-full 2xl:basis-3/4">
          {/* Quick Summary */}
          <div className="flex flex-wrap gap-x-2 gap-y-4 justify-around items-center flex-shrink-0">
            {/* Bank Accounts */}
            <div className="data-card">
              <DataCard
                title="Bank Accounts"
                text={bankAccounts ? bankAccounts.length : <Loader type={2} />}
                icon={<i className="fa-solid fa-building-columns"></i>}
              />
            </div>

            {/* Wallet Balance */}
            <div className="data-card">
              <DataCard
                title="Wallet Balance"
                text={
                  businessInfo.wallet_balance ? (
                    currency(businessInfo.wallet_balance)
                  ) : (
                    <Loader type={2} />
                  )
                }
                icon={<i className="fa-solid fa-wallet"></i>}
              />
            </div>

            {/* Payment Categories */}
            <div className="data-card">
              <DataCard
                title="Payment Categories"
                text={
                  paymentCategories ? (
                    paymentCategories.length
                  ) : (
                    <Loader type={2} />
                  )
                }
                icon={<i className="fa-solid fa-wallet"></i>}
              />
            </div>

            {/* Total Transactions - Today */}
            <div className="data-card">
              <DataCard
                title="Total Transactions - Today"
                text={
                  todayTransactions ? (
                    currency(
                      todayTransactions.reduce((acc, next) => {
                        return parseFloat(acc) + parseFloat(next.amount)
                      }, 0)
                    )
                  ) : (
                    <Loader type={2} />
                  )
                }
                icon={<i className="fa-solid fa-credit-card"></i>}
              />
            </div>

            {/* Total Transactions - This Month */}
            <div className="data-card">
              <DataCard
                title={`Total Transactions - ${new Intl.DateTimeFormat(
                  "en-us",
                  {
                    month: "long",
                  }
                ).format(new Date())}`}
                text={
                  thisMonthTransactions ? (
                    currency(
                      thisMonthTransactions.reduce((acc, next) => {
                        return parseFloat(acc) + parseFloat(next.amount)
                      }, 0)
                    )
                  ) : (
                    <Loader type={2} />
                  )
                }
                icon={<i className="fa-solid fa-money-check"></i>}
              />
            </div>

            {/* Users */}
            <div className="data-card w-1/6 xl:w-[15%]">
              <DataCard
                title="Users"
                text={
                  businessUsers ? businessUsers.length : <Loader type={2} />
                }
                icon={<i className="fa-solid fa-users"></i>}
              />
            </div>
          </div>

          {/* Charts */}
          <div className="flex flex-wrap gap-3 mt-5 lg:justify-center xl:justify-between">
            {/* Bar Chart */}
            <div className="flex justify-center items-center basis-full xl:basis-[70%] bg-slate-900 shadow-2xl rounded-lg">
              <div className="w-full">
                <RenderChart type="bar" />
              </div>
            </div>

            {/* Pie Chart */}
            <div className="flex items-center justify-center basis-full xl:basis-[20%] overflow-hidden grow bg-slate-900 shadow-2xl rounded-lg">
              <div className="m-5">
                <RenderChart type="pie" />
              </div>
            </div>
          </div>

          {/* Transactions History Table */}
          <div className="max-w-full overflow-scroll">
            <TransactionsHistory />
          </div>
        </div>

        {/* Right Column */}
        <div className="basis-full 2xl:basis-1/5">
          <div className="mx-3 bg-slate-700 p-3 grow h-full">Right Column</div>
        </div>
      </div>
    </>
  )
}
