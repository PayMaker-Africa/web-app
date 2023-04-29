import { useContext, useEffect, useState } from "react"
import { PayMakerAPIContext } from "../contexts/PayMakerAPIContext"

export default function useParsedAPIData() {
  const { todayTransactions, recentTransactions } =
    useContext(PayMakerAPIContext)

  const [parsedTodayTransactions, setParsedTodayTransactions] = useState(
    todayTransactions || []
  )
  const [todayTransactionsTotal, setTodayTransactionsTotal] = useState(() => {
    parsedTodayTransactions.reduce((acc, next) => {
      return parseFloat(acc) + parseFloat(next.amount)
    }, 0)
  })

  function getTransactions(duration) {
    const parsedTransactions = recentTransactions || []
    const output = []
    for (let i = 0; i < parsedTransactions.length; i++) {}
  }

  return { parsedTodayTransactions, todayTransactionsTotal }
}
