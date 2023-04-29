import Accordion from "../../components/Accordion/Accordion"
import SectionHeader from "../../components/SectionHeader/SectionHeader"

export default function Support() {
  return (
    <div className="flex flex-wrap border-red-500 h-full">
      {/* Left Column */}
      <div className="w-full h-fit lg:h-full xl:w-1/2 shadow-inner flex flex-col justify-center items-center gap-10 overflow-scroll">
        <div className="flex flex-wrap grow w-full">
          <div className="w-full lg:w-1/3 h-full bg-black/70 flex flex-col">
            {/* Live Chat */}
            <div className="flex bg-slate-900 shadow-black shadow-lg m-5 p-3 rounded-md cursor-pointer zoom-in">
              <span>
                <i className="fa-solid fa-comments"></i>
              </span>

              <span className="ml-2">Live Chat</span>
            </div>

            {/* Open New Ticket */}
            <div className="flex bg-slate-900 shadow-black shadow-lg m-5 p-3 rounded-md cursor-pointer zoom-in">
              <span>
                <i className="fa-solid fa-ticket"></i>
              </span>

              <span className="ml-2">Open New Ticket</span>
            </div>

            {/* View Tickets */}
            <div className="flex bg-slate-900 shadow-black shadow-lg m-5 p-3 rounded-md cursor-pointer zoom-in">
              <span>
                <i className="fa-solid fa-clipboard-list"></i>
              </span>

              <span className="ml-2">View Tickets</span>
            </div>

            {/* Contact Us */}
            <div className="flex bg-slate-900 shadow-black shadow-lg m-5 p-3 rounded-md cursor-pointer zoom-in">
              <span>
                <i className="fa-solid fa-headset"></i>
              </span>

              <span className="ml-2">Contact Us</span>
            </div>
          </div>
          <div className="grow bg-black/20 h-full shadow-inner shadow-black p-3 flex justify-center items-center">
            Preview Contents
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full xl:w-1/2 bg-slate-900 shadow-inner shadow-black rounded-md flex flex-col items-center gap-4 overflow-y-scroll h-full">
        {/* FAQs */}
        <span className="pt-5">
          <SectionHeader title="Frequently Asked Questions" />
        </span>
        <div className="overflow-y-scroll w-full flex flex-wrap justify-around gap-y-10 p-5">
          <div className="w-full xl:w-[45%] h-fit rounded-md shadow-black shadow-md p-3 zoom-in cursor-pointer">
            <Accordion />
          </div>

          <div className="w-full xl:w-[45%] h-fit rounded-md shadow-black shadow-md p-3 zoom-in cursor-pointer">
            <Accordion />
          </div>

          <div className="w-full xl:w-[45%] h-fit rounded-md shadow-black shadow-md p-3 zoom-in cursor-pointer">
            <Accordion />
          </div>

          <div className="w-full xl:w-[45%] h-fit rounded-md shadow-black shadow-md p-3 zoom-in cursor-pointer">
            <Accordion />
          </div>

          <div className="w-full xl:w-[45%] h-fit rounded-md shadow-black shadow-md p-3 zoom-in cursor-pointer">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  )
}
