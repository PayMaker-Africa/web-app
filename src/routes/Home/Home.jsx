import DataCard from "../../components/DataCard/DataCard"
import RenderChart from "../../components/RenderChart/RenderChart"
import TransactionsHistory from "../../components/TransactionsHistory/TransactionsHistory"
import { currency } from "../../constants/helper-functions"
import "./Home.css"

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap mt-3 mx-1">
        {/* Left Column */}
        <div className="flex flex-col gap-4 flex-[2] flex-wrap basis-full 2xl:basis-3/4">
          {/* Quick Summary */}
          <div className="flex flex-wrap gap-x-2 gap-y-4 justify-center xl:justify-between items-center flex-shrink-0">
            {/* Bank Accounts */}
            <div className="data-card">
              <DataCard
                title="Bank Accounts"
                text={3}
                icon={<i className="fa-solid fa-building-columns"></i>}
              />
            </div>

            {/* Wallet Balance */}
            <div className="data-card">
              <DataCard
                title="Wallet Balance"
                text={currency(Math.ceil(Math.random() * 999999))}
                icon={<i className="fa-solid fa-wallet"></i>}
              />
            </div>

            {/* Payment Categories */}
            <div className="data-card">
              <DataCard
                title="Payment Categories"
                text={Math.ceil(Math.random() * 15)}
                icon={<i className="fa-solid fa-wallet"></i>}
              />
            </div>

            {/* Total Transactions - Today */}
            <div className="data-card">
              <DataCard
                title="Total Transactions - Today"
                text={currency(Math.ceil(Math.random() * 999999))}
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
                text={currency(Math.ceil(Math.random() * 99999999))}
                icon={<i className="fa-solid fa-money-check"></i>}
              />
            </div>

            {/* Users */}
            <div className="data-card w-1/6 xl:w-[15%]">
              <DataCard
                title="Users"
                text={Math.ceil(Math.random() * 10)}
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
