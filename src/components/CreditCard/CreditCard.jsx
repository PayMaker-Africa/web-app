export default function CreditCard({ card = {} }) {
  return (
    <div className="bg-black/50 flex-1 h-full flex flex-col justify-around cursor-pointer rounded-lg shadow-black shadow-md py-4 px-2 text-xs md:text-base lg:text-lg 2xl:text-xl hover:scale-[0.95] ease-linear duration-300">
      {/* Bank */}
      <div className="flex justify-end items-center p-3">
        <span className="w-12 sm:w-16 md:w-20">
          <img
            src={`https://picsum.photos/200?random=${Math.ceil(
              Math.random() * 99
            )}`}
            alt="Bank"
            className="object-cover"
          />
        </span>
      </div>

      {/* Number & CVV */}
      <div className="flex justify-between items-center">
        {/* Number */}
        <span className="ml-2 font-bold">{card.number}</span>

        {/* CVV */}
        <span className="p-5">{card.cvv}</span>
      </div>

      {/* Name, Expiry Date & Processor */}
      <div className="flex justify-between px-2">
        {/* Name */}
        <span>{card.name}</span>
        {/* Expiry Date */}
        <span className="flex flex-col justify-between items-center">
          <span>Valid Thru</span>
          <span>{card.expiry_date}</span>
        </span>
        {/* Processor */}
        <span className="w-8 sm:w-12 md:w-16">
          <img
            src="https://picsum.photos/200?random=1"
            alt="Bank"
            className="object-cover"
          />
        </span>{" "}
      </div>
    </div>
  )
}
