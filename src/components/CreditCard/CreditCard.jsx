import { bankLogosRequiringWhiteBg } from "../../constants/helper-functions"

export default function CreditCard({ card = {} }) {
  return (
    <div
      className="bg-black/50 flex-1 h-full flex flex-col justify-around cursor-pointer rounded-lg shadow-black shadow-md py-4 px-2 text-xs md:text-base lg:text-lg 2xl:text-xl hover:scale-[0.95] ease-linear duration-300"
      style={{
        backgroundImage: `url('./assets/bgs/${
          card.issuer ? card.issuer.replaceAll(" ", "") : ""
        }.png')`,
      }}>
      {/* Bank */}
      <div className="flex justify-end items-center p-3">
        <span
          className={`w-12 sm:w-16 md:w-20 ${
            bankLogosRequiringWhiteBg.includes(card?.issuer) &&
            "p-2 bg-white rounded-md shadow-black shadow-lg"
          }`}>
          <img
            src={`./assets/logos/${
              card.issuer ? card.issuer.replaceAll(" ", "") : ""
            }.png`}
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
        <span className="flex flex-col justify-end items-center text-sm">
          <span className="">Valid Thru</span>
          <span>{card.expiry_date}</span>
        </span>
        {/* Processor */}
        <span className="w-8 sm:w-12 md:w-16">
          <img
            src={`./assets/logos/${card.brand ? card.brand : ""}.png`}
            alt="Brand"
            className="object-cover"
          />
        </span>{" "}
      </div>
    </div>
  )
}
