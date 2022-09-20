import { currency } from "../../constants/helper-functions"

export default function PaymentsCard({ category }) {
  return (
    <div className="shadow-inner shadow-black p-5 bg-black/50 w-full rounded-lg flex gap-4 zoom-in cursor-pointer">
      {/* Color */}
      <div
        className={`w-2 h-full`}
        style={{ background: category?.color }}></div>

      {/* Title */}
      <div className="w-full flex flex-col gap-2">
        <span className="w-full border-b pb-2">{category.title}</span>
        <span className="capitalize">
          {category?.type ? category.type + " | " : "Default Payment Scheme"}
          {category?.amount ? currency(category.amount) + " | " : ""}
          {category?.minAmount ? currency(category.minAmount) + " | " : ""}
          {category?.maxAmount ? currency(category.maxAmount) : ""}
        </span>
      </div>

      {/* Details */}
      <div className=""></div>
    </div>
  )
}
