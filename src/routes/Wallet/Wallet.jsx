import ActionCard from "../../components/ActionCard/ActionCard"
import CreateWallet from "../../components/CreateWallet/CreateWallet"
import DataCard from "../../components/DataCard/DataCard"
import RenderChart from "../../components/RenderChart/RenderChart"
import TopUpWallet from "../../components/TopUpWallet/TopUpWallet"
import TransactionsHistory from "../../components/TransactionsHistory/TransactionsHistory"
import Transfer from "../../components/Transfer/Transfer"
import Withdraw from "../../components/Withdraw/Withdraw"
import { currency } from "../../constants/helper-functions"
import "./Wallet.css"

export default function Wallet() {
  return (
    <div className="mx-3 mt-5 flex flex-col gap-4">
      {/* Wallets Balances */}
      <div className="flex flex-wrap gap-4 justify-around items-center flex-shrink-0 pb-6 border-b">
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
      <div className="flex flex-wrap xl:flex-nowrap justify-around xl:justify-start overflow-x-scroll items-center gap-4 2xl:gap-10 mt-5 snap-x scroll">
        <div className="action-card-container">
          <ActionCard title="Create Wallet" content={<CreateWallet />} />
        </div>

        <div className="action-card-container">
          <ActionCard title="Top Up Wallet" content={<TopUpWallet />} />
        </div>

        <div className="action-card-container">
          <ActionCard title="Withdraw" content={<Withdraw />} />
        </div>

        <div className="action-card-container">
          <ActionCard title="Transfer" content={<Transfer />} />
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
