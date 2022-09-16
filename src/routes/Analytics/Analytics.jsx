import DataCard from "../../components/DataCard/DataCard"
import RenderChart from "../../components/RenderChart/RenderChart"
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import TransactionsHistory from "../../components/TransactionsHistory/TransactionsHistory"
import { paymentCategories } from "../../constants/demoData"
import { currency } from "../../constants/helper-functions"

export default function Analytics() {
  return (
    <div className="mx-3 mt-3 flex flex-col gap-4">
      {/* Highest Grossing Category */}
      <SectionHeader title="Highest Grossing Category" />
      <div className="flex flex-wrap gap-4 justify-around xl:justify-start items-center flex-shrink-0">
        {/* Today */}
        <div className="data-card">
          <DataCard
            title="Today"
            text={`${
              paymentCategories[
                Math.floor(Math.random() * paymentCategories.length)
              ].title
            } - ${currency(Math.ceil(Math.random() * 999999))}`}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Past 7 Days */}
        <div className="data-card">
          <DataCard
            title="Past 7 Days"
            text={`${
              paymentCategories[
                Math.floor(Math.random() * paymentCategories.length)
              ].title
            } - ${currency(Math.ceil(Math.random() * 99999))}`}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* This Week */}
        <div className="data-card">
          <DataCard
            title="This Week"
            text={`${
              paymentCategories[
                Math.floor(Math.random() * paymentCategories.length)
              ].title
            } - ${currency(Math.ceil(Math.random() * 99999))}`}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* This Month */}
        <div className="data-card">
          <DataCard
            title="This Month"
            text={`${
              paymentCategories[
                Math.floor(Math.random() * paymentCategories.length)
              ].title
            } - ${currency(Math.ceil(Math.random() * 99999))}`}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Past 31 Days */}
        <div className="data-card">
          <DataCard
            title="Past 31 Days"
            text={`${
              paymentCategories[
                Math.floor(Math.random() * paymentCategories.length)
              ].title
            } - ${currency(Math.ceil(Math.random() * 99999))}`}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>
      </div>

      {/* Most Transacted Category */}
      <span className="border-t mt-10 pt-10">
        <SectionHeader title="Most Transacted Category" />
      </span>
      <div className="flex flex-wrap gap-4 justify-around xl:justify-start items-center flex-shrink-0">
        {/* Today */}
        <div className="data-card">
          <DataCard
            title="Today"
            text={`${
              paymentCategories[
                Math.floor(Math.random() * paymentCategories.length)
              ].title
            } - ${Math.ceil(Math.random() * 999)}`}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Past 7 Days */}
        <div className="data-card">
          <DataCard
            title="Past 7 Days"
            text={`${
              paymentCategories[
                Math.floor(Math.random() * paymentCategories.length)
              ].title
            } - ${Math.ceil(Math.random() * 999)}`}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* This Week */}
        <div className="data-card">
          <DataCard
            title="This Week"
            text={`${
              paymentCategories[
                Math.floor(Math.random() * paymentCategories.length)
              ].title
            } - ${Math.ceil(Math.random() * 999)}`}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* This Month */}
        <div className="data-card">
          <DataCard
            title="This Month"
            text={`${
              paymentCategories[
                Math.floor(Math.random() * paymentCategories.length)
              ].title
            } - ${Math.ceil(Math.random() * 999)}`}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Past 31 Days */}
        <div className="data-card">
          <DataCard
            title="Past 31 Days"
            text={`${
              paymentCategories[
                Math.floor(Math.random() * paymentCategories.length)
              ].title
            } - ${Math.ceil(Math.random() * 999)}`}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>
      </div>

      {/* Bar & Pie Charts */}
      <span className="border-t mt-10 pt-10">
        <SectionHeader title="Charts Analytics" />
      </span>
      {/* Charts */}
      <div className="flex flex-wrap gap-3 mt-5 lg:justify-center xl:justify-between mb-10">
        {/* Bar Chart */}
        <div className="flex justify-center items-center basis-full xl:basis-[70%] bg-slate-900 shadow-inner shadow-black rounded-lg">
          <div className="w-full p-5">
            <RenderChart type="bar" />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="flex items-center justify-center basis-full xl:basis-[20%] overflow-hidden grow bg-slate-900 shadow-inner shadow-black rounded-lg p-5">
          <div className="m-5 flex flex-col justify-center items-center gap-4">
            <RenderChart type="pie" />
          </div>
        </div>
      </div>

      {/* Transactions History */}
      <span className="border-t mt-10 pt-10">
        <SectionHeader title="Transactions History" />
      </span>
      <div className="flex flex-wrap gap-3 mt-5 lg:justify-center xl:justify-between mb-10">
        {/* Transactions History */}
        <div className="flex justify-center items-center basis-full xl:basis-[70%] bg-slate-900 shadow-inner shadow-black rounded-lg">
          <div className="w-full p-5">
            <TransactionsHistory />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="flex items-center justify-center basis-full xl:basis-[20%] overflow-hidden grow bg-slate-900 shadow-inner shadow-black rounded-lg p-5">
          <div className="m-5 flex flex-col justify-center items-center gap-4">
            <RenderChart type="doughnut" />
          </div>
        </div>
      </div>
    </div>
  )
}
