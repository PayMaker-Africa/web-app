import { useState } from "react"
import Loader from "./../../components/Loader/Loader"

export default function Actions({
  editBusy = false,
  activateBusy = false,
  deleteBusy = false,
  deactivateBusy = false,
  editFunc = () => {},
  deleteFunc = () => {},
  activateFunc = () => {},
  deactivateFunc = () => {},
  activate = false,
}) {
  return (
    <div className="flex gap-4 justify-around p-3 items-center text-xl w-full bg-black/50 shadow-inner shadow-black rounded-md">
      {/* Edit */}
      <span
        className="bg-sky-600 rounded-md shadow-lg shadow-black p-3 flex justify-center items-center text-xs md:text-sm zoom-in cursor-pointer"
        onClick={() => {
          !editBusy && editFunc()
        }}>
        <i className="fa-solid fa-pencil"></i>
      </span>

      {/* Delete */}
      <span
        className="bg-red-500 rounded-md shadow-lg shadow-black p-3 flex justify-center items-center text-xs md:text-sm zoom-in cursor-pointer"
        onClick={() => {
          !deleteBusy && deleteFunc()
        }}>
        {!deleteBusy ? (
          <i className="fa-solid fa-trash-can"></i>
        ) : (
          <Loader type={3} />
        )}
      </span>

      {/* Activate */}
      {activate && (
        <span
          className={`bg-teal-500 rounded-md shadow-lg shadow-black p-3 flex justify-center items-center text-xs md:text-sm zoom-in cursor-pointer`}
          onClick={() => {
            !activateBusy && activateFunc()
          }}>
          {!activateBusy ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <Loader type={3} />
          )}
        </span>
      )}

      {/* Deactivate */}
      {!activate && (
        <span
          className={`bg-red-600 rounded-md shadow-lg shadow-black p-3 flex justify-center items-center text-xs md:text-sm zoom-in cursor-pointer`}
          onClick={() => {
            !deactivateBusy && deactivateFunc()
          }}>
          {!deactivateBusy ? (
            <i className="fa-solid fa-ban"></i>
          ) : (
            <Loader type={3} />
          )}
        </span>
      )}
    </div>
  )
}
