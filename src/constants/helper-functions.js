export function currency(value) {
    return `₦ ${Number(value).toLocaleString()}`
}

export function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min
}

export function generateRandomColor() {
    let maxVal = 0xffffff // 16777215
    let randomNumber = Math.random() * maxVal
    randomNumber = Math.floor(randomNumber)
    randomNumber = randomNumber.toString(16)
    let randColor = randomNumber.padStart(6, 0)
    return `#${randColor.toUpperCase()}`
}

export function invertHex(hexnum) {
    if (hexnum.length != 6) {
        console.error("Hex color must be six hex numbers in length.")
        return false
    }

    hexnum = hexnum.toUpperCase()
    var splitnum = hexnum.split("")
    var resultnum = ""
    var simplenum = "FEDCBA9876".split("")
    var complexnum = new Array()
    complexnum.A = "5"
    complexnum.B = "4"
    complexnum.C = "3"
    complexnum.D = "2"
    complexnum.E = "1"
    complexnum.F = "0"

    for (let i = 0; i < 6; i++) {
        if (!isNaN(splitnum[i])) {
            resultnum += simplenum[splitnum[i]]
        } else if (complexnum[splitnum[i]]) {
            resultnum += complexnum[splitnum[i]]
        } else {
            console.error("Hex colors must only include hex numbers 0-9, and A-F")
            return false
        }
    }

    return resultnum
}

export function greeting() {
    const date = new Date()
    const time = date.getHours()

    if (time < 12) {
        return "Good Morning"
    }
    if (time > 12) {
        return "Good Afternoon"
    }
    if (time == 12) {
        return "It's Mid-day"
    }
}


// export function filterData(data) {
//     if (!filter) return data
//     const categoryOutput = []
//     const statusOutput = []
//     const startDateOutput = []
//     const endDateOutput = []
//     let currentCategory
//     let currentStatus
//     let output = data

//     // Filter Category
//     for (let i = 0; i < data.length; i++) {
//         currentCategory = getPaymentCategory(data[i].category, paymentCategories)
//         if (
//             filter.category === "All" ||
//             currentCategory.toLowerCase() === filter.category.toLowerCase()
//         ) {
//             categoryOutput.push(data[i])
//             output = categoryOutput
//         }
//     }

//     // Filter Status
//     for (let i = 0; i < categoryOutput.length; i++) {
//         currentStatus = getTransactionStatusName(
//             categoryOutput[i].status,
//             transactionStatuses
//         )
//         if (
//             filter.status === "All" ||
//             currentStatus.toLowerCase() === filter.status.toLowerCase()
//         ) {
//             statusOutput.push(categoryOutput[i])
//             output = statusOutput
//         }
//     }

//     // Filter Start Date
//     for (let i = 0; i < statusOutput.length; i++) {
//         if (
//             filter.startDate &&
//             new Date(data[i].created_at) >= new Date(filter.startDate)
//         ) {
//             startDateOutput.push(statusOutput[i])
//             output = startDateOutput
//         }
//     }

//     // Filter End Date
//     for (let i = 0; i < startDateOutput.length; i++) {
//         if (
//             filter.endDate &&
//             new Date(data[i].created_at) <= new Date(filter.endDate)
//         ) {
//             endDateOutput.push(startDateOutput[i])
//             output = endDateOutput
//         }
//     }
//     return output
// }