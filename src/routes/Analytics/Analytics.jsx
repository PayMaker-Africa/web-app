import { useLayoutEffect } from "react"
import { useEffect } from "react"
import { useContext, useState } from "react"
import DataCard from "../../components/DataCard/DataCard"
import Loader from "../../components/Loader/Loader"
import RenderChart from "../../components/RenderChart/RenderChart"
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import TransactionsHistory from "../../components/TransactionsHistory/TransactionsHistory"
import {
  currency,
  findInArr,
  getDataFromArr,
  indexOfMax,
} from "../../constants/helper-functions"
import { PayMakerAPIContext } from "../../contexts/PayMakerAPIContext"

export default function Analytics() {
  const {
    todayTransactions,
    paymentCategories,
    recentTransactions,
    thisWeekTransactions,
    thisMonthTransactions,
    past31DaysTransactions,
  } = useContext(PayMakerAPIContext)

  function sortTransactions(sortBy, transactionsArr) {
    const output = []
    for (let i = 0; i < transactionsArr.length; i++) {
      let transaction = transactionsArr[i]
      let transactionIndex = findInArr(sortBy, transaction.category, output)
      // console.log(transactionIndex)
      if (transactionIndex < 0) {
        output.push(transaction)
      } else {
        output[transactionIndex].amount += parseFloat(transaction.amount)
      }
    }
    return output
  }

  function getSortedTransactionsData(transactionsArr) {
    const maxIndex = indexOfMax(
      transactionsArr.map((transaction) => transaction.amount)
    )
    const maxTransaction = transactionsArr[maxIndex]

    return maxTransaction
  }

  function countTransactions(transactionsArr) {
    const output = []
    for (let i = 0; i < transactionsArr.length; i++) {
      let transaction = transactionsArr[i]
      let transactionData = {}
      let transactionCategoryIndex = findInArr(
        "category",
        transaction.category,
        output
      )

      if (transactionCategoryIndex > -1) {
        output[transactionCategoryIndex].count =
          output[transactionCategoryIndex].count + 1
      } else {
        transactionData.category = transaction.category || "No Category"
        transactionData.count = 1
        output.push(transactionData)
      }
    }
    return output
  }

  function getMostTransactedCategory(countedTransactionsArr) {
    if (!countedTransactionsArr.length) return {}
    const mostTransactedCategoryIndex = indexOfMax(
      countedTransactionsArr.map((transaction) => transaction.count)
    )

    let categoryInfo
    if (mostTransactedCategoryIndex > -1) {
      categoryInfo = getDataFromArr(
        paymentCategories || [],
        "id",
        countedTransactionsArr[mostTransactedCategoryIndex]?.category
      )
      if (categoryInfo) {
        categoryInfo.count =
          countedTransactionsArr[mostTransactedCategoryIndex]?.count
      }
    }
    return categoryInfo
  }

  // ############################# Highest Grossing Category States #############################

  // Transactions - Today
  const [
    sortedTransactionsByCategoryToday,
    setSortedTransactionsByCategoryToday,
  ] = useState([])
  const [highestGrossingTransactionToday, setHighestGrossingTransactionToday] =
    useState(<Loader type={2} />)

  // Transactions - Past 7 Days
  const [sortedTransactionsByCategory7, setSortedTransactionsByCategory7] =
    useState([])
  const [highestGrossingTransaction7, setHighestGrossingTransaction7] =
    useState(<Loader type={2} />)

  // Transactions - This Week
  const [
    sortedTransactionsByCategoryThisWeek,
    setSortedTransactionsByCategoryThisWeek,
  ] = useState([])
  const [
    highestGrossingTransactionThisWeek,
    setHighestGrossingTransactionThisWeek,
  ] = useState(<Loader type={2} />)

  // Transactions - This Month
  const [
    sortedTransactionsByCategoryThisMonth,
    setSortedTransactionsByCategoryThisMonth,
  ] = useState([])
  const [
    highestGrossingTransactionThisMonth,
    setHighestGrossingTransactionThisMonth,
  ] = useState(<Loader type={2} />)

  // Transactions - Past 31 Days
  const [
    sortedTransactionsByCategoryPast31Days,
    setSortedTransactionsByCategoryPast31Days,
  ] = useState([])
  const [
    highestGrossingTransactionPast31Days,
    setHighestGrossingTransactionPast31Days,
  ] = useState(<Loader type={2} />)

  // ############################# Most Transacted Category States #############################

  // Transactions - Today
  const [countedTransactionsToday, setCountedTransactionsToday] = useState([])
  const [mostTransactedCategoryToday, setMostTransactedCategoryToday] =
    useState(<Loader type={2} />)

  // Transactions - Past 7 Days
  const [countedTransactions7, setCountedTransactions7] = useState([])
  const [mostTransactedCategory7, setMostTransactedCategory7] = useState(
    <Loader type={2} />
  )

  // Transactions - This Week
  const [countedTransactionsThisWeek, setCountedTransactionsThisWeek] =
    useState([])
  const [mostTransactedCategoryThisWeek, setMostTransactedCategoryThisWeek] =
    useState(<Loader type={2} />)

  // Transactions - This Month
  const [countedTransactionsThisMonth, setCountedTransactionsThisMonth] =
    useState([])
  const [mostTransactedCategoryThisMonth, setMostTransactedCategoryThisMonth] =
    useState(<Loader type={2} />)

  // Transactions - Past 31 Days
  const [countedTransactionsPast31Days, setCountedTransactionsPast31Days] =
    useState([])
  const [
    mostTransactedCategoryPast31Days,
    setMostTransactedCategoryPast31Days,
  ] = useState(<Loader type={2} />)

  // ############################# Sorted Transactions By Category UseEffects #############################

  useEffect(() => {
    if (todayTransactions) {
      setSortedTransactionsByCategoryToday(
        sortTransactions("category", todayTransactions)
      )
      setCountedTransactionsToday(() => countTransactions(todayTransactions))
    }
  }, [todayTransactions])

  useEffect(() => {
    if (recentTransactions) {
      setSortedTransactionsByCategory7(
        sortTransactions("category", recentTransactions)
      )
      setCountedTransactions7(() => countTransactions(recentTransactions))
    }
  }, [recentTransactions])

  useEffect(() => {
    if (thisWeekTransactions) {
      setSortedTransactionsByCategoryThisWeek(
        sortTransactions("category", thisWeekTransactions)
      )
      setCountedTransactionsThisWeek(() =>
        countTransactions(thisWeekTransactions)
      )
    }
  }, [thisWeekTransactions])

  useEffect(() => {
    if (thisMonthTransactions) {
      setSortedTransactionsByCategoryThisMonth(
        sortTransactions("category", thisMonthTransactions)
      )
      setCountedTransactionsThisMonth(() =>
        countTransactions(thisMonthTransactions)
      )
    }
  }, [thisMonthTransactions])

  useEffect(() => {
    if (past31DaysTransactions) {
      setSortedTransactionsByCategoryPast31Days(
        sortTransactions("category", past31DaysTransactions)
      )

      setCountedTransactionsPast31Days(() =>
        countTransactions(past31DaysTransactions)
      )
    }
  }, [past31DaysTransactions])

  useEffect(() => {
    setHighestGrossingTransactionToday(() => {
      let transaction = getSortedTransactionsData(
        sortedTransactionsByCategoryToday
      )
      return paymentCategories ? (
        `${
          getDataFromArr(paymentCategories, "id", transaction?.category)
            .title || "No Category"
        } - ${currency(transaction?.amount)}`
      ) : (
        <Loader type={2} />
      )
    })
  }, [sortedTransactionsByCategoryToday, paymentCategories])

  useEffect(() => {
    setHighestGrossingTransaction7(() => {
      let transaction = getSortedTransactionsData(sortedTransactionsByCategory7)
      return paymentCategories ? (
        `${
          getDataFromArr(paymentCategories, "id", transaction?.category)
            .title || "No Category"
        } - ${currency(transaction?.amount)}`
      ) : (
        <Loader type={2} />
      )
    })
  }, [sortedTransactionsByCategory7, paymentCategories])

  useEffect(() => {
    setHighestGrossingTransactionThisWeek(() => {
      let transaction = getSortedTransactionsData(
        sortedTransactionsByCategoryThisWeek
      )
      return paymentCategories ? (
        `${
          getDataFromArr(paymentCategories, "id", transaction?.category)
            .title || "No Category"
        } - ${currency(transaction?.amount)}`
      ) : (
        <Loader type={2} />
      )
    })
  }, [sortedTransactionsByCategoryThisWeek, paymentCategories])

  useEffect(() => {
    setHighestGrossingTransactionThisMonth(() => {
      let transaction = getSortedTransactionsData(
        sortedTransactionsByCategoryThisMonth
      )

      return paymentCategories ? (
        `${
          getDataFromArr(paymentCategories, "id", transaction?.category)
            .title || "No Category"
        } - ${currency(transaction?.amount)}`
      ) : (
        <Loader type={2} />
      )
    })
  }, [sortedTransactionsByCategoryThisMonth, paymentCategories])

  useEffect(() => {
    setHighestGrossingTransactionPast31Days(() => {
      let transaction = getSortedTransactionsData(
        sortedTransactionsByCategoryPast31Days
      )
      return paymentCategories ? (
        `${
          getDataFromArr(paymentCategories, "id", transaction?.category)
            .title || "No Category"
        } - ${currency(transaction?.amount)}`
      ) : (
        <Loader type={2} />
      )
    })
  }, [sortedTransactionsByCategoryPast31Days, paymentCategories])

  // ############################# Counted Transactions UseEffects #############################
  useEffect(() => {
    if (countedTransactionsToday && paymentCategories) {
      setMostTransactedCategoryToday(() => {
        const categoryInfo = getMostTransactedCategory(countedTransactionsToday)
        return `${categoryInfo.title} - ${categoryInfo.count}`
      })
    }
  }, [countedTransactionsToday, paymentCategories])

  useEffect(() => {
    if (countedTransactionsThisWeek && paymentCategories) {
      setMostTransactedCategory7(() => {
        const categoryInfo = getMostTransactedCategory(countedTransactions7)
        return `${categoryInfo.title} - ${categoryInfo.count}`
      })
    }
  }, [countedTransactions7, paymentCategories])

  useEffect(() => {
    if (countedTransactionsThisWeek && paymentCategories) {
      setMostTransactedCategoryThisWeek(() => {
        const categoryInfo = getMostTransactedCategory(
          countedTransactionsThisWeek
        )
        return `${categoryInfo.title} - ${categoryInfo.count}`
      })
    }
  }, [countedTransactionsThisWeek, paymentCategories])

  useEffect(() => {
    if (countedTransactionsThisMonth && paymentCategories) {
      setMostTransactedCategoryThisMonth(() => {
        const categoryInfo = getMostTransactedCategory(
          countedTransactionsThisMonth
        )
        return `${categoryInfo.title} - ${categoryInfo.count}`
      })
    }
  }, [countedTransactionsThisMonth, paymentCategories])

  useEffect(() => {
    if (countedTransactionsPast31Days && paymentCategories) {
      setMostTransactedCategoryPast31Days(() => {
        const categoryInfo = getMostTransactedCategory(
          countedTransactionsPast31Days
        )
        return `${categoryInfo.title} - ${categoryInfo.count}`
      })
    }
  }, [countedTransactionsPast31Days, paymentCategories])

  return (
    <div className="mx-3 mt-3 flex flex-col gap-4">
      {/* Highest Grossing Category */}
      <SectionHeader title="Highest Grossing Category" />
      <div className="flex flex-wrap gap-4 justify-around xl:justify-start items-center flex-shrink-0">
        {/* Today */}
        <div className="data-card">
          <DataCard
            title="Today"
            text={highestGrossingTransactionToday}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Past 7 Days */}
        <div className="data-card">
          <DataCard
            title="Past 7 Days"
            text={highestGrossingTransaction7}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* This Week */}
        <div className="data-card">
          <DataCard
            title="This Week"
            text={highestGrossingTransactionThisWeek}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* This Month */}
        <div className="data-card">
          <DataCard
            title="This Month"
            text={highestGrossingTransactionThisMonth}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Past 31 Days */}
        <div className="data-card">
          <DataCard
            title="Past 31 Days"
            text={highestGrossingTransactionPast31Days}
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
            text={mostTransactedCategoryToday}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Past 7 Days */}
        <div className="data-card">
          <DataCard
            title="Past 7 Days"
            text={mostTransactedCategory7}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* This Week */}
        <div className="data-card">
          <DataCard
            title="This Week"
            text={mostTransactedCategoryThisWeek}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* This Month */}
        <div className="data-card">
          <DataCard
            title="This Month"
            text={mostTransactedCategoryThisMonth}
            icon={<i className="fa-solid fa-wallet"></i>}
          />
        </div>

        {/* Past 31 Days */}
        <div className="data-card">
          <DataCard
            title="Past 31 Days"
            text={mostTransactedCategoryPast31Days}
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
