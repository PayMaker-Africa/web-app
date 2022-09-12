import ActionCard from "../../components/ActionCard/ActionCard"
import DataCard from "../../components/DataCard/DataCard"
import RenderChart from "../../components/RenderChart/RenderChart"
import TransactionsHistory from "../../components/TransactionsHistory/TransactionsHistory"
import { currency } from "../../constants/helper-functions"
import "./Wallet.css"

export default function Wallet() {
  return (
    <div className="mx-3 mt-3 flex flex-col gap-4">
      {/* Wallets Balances */}
      <div className="flex flex-wrap gap-4 justify-center xl:justify-between items-center flex-shrink-0">
        {/* Main Wallet */}
        <div className="data-card">
          <DataCard
            title="Main Wallet"
            text={currency(Math.ceil(Math.random() * 999999))}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Tithes Wallet */}
        <div className="data-card">
          <DataCard
            title="Tithes Wallet"
            text={currency(Math.ceil(Math.random() * 999999))}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Offering Wallet */}
        <div className="data-card">
          <DataCard
            title="Offerings Wallet"
            text={currency(Math.ceil(Math.random() * 999999))}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Seeds Wallet */}
        <div className="data-card">
          <DataCard
            title="Seeds Wallet"
            text={currency(Math.ceil(Math.random() * 999999))}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Building Wallet */}
        <div className="data-card">
          <DataCard
            title="Building Wallet"
            text={currency(Math.ceil(Math.random() * 999999))}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>
      </div>

      {/* Action Cards */}
      <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-start overflow-x-scroll items-center gap-4 2xl:gap-10 mt-10 snap-x scroll">
        <div className="action-card-container">
          <ActionCard title="Create Wallet" />
        </div>

        <div className="action-card-container">
          <ActionCard title="Top Up Wallet" />
        </div>

        <div className="action-card-container">
          <ActionCard title="Withdraw" />
        </div>

        <div className="action-card-container">
          <ActionCard title="Transfer" />
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-4">
        <div className="flex-1 px-3">
          <TransactionsHistory />
        </div>

        <div className="flex-1">
          <RenderChart type="bar" />
        </div>
      </div>
    </div>
  )
}
