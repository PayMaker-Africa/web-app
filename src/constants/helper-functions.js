import axios from "axios"

// API Call & States Update Function
export async function makeAPIRequest(
    url,
    stateHandlerFunc = () => { },
    method = "get",
    data = {}
) {
    const request = await apiRequest(url)
    if (request.data) {
        stateHandlerFunc(request.data)
        return request.data
    }
    return false
}

export function currency(value) {
    return `₦ ${Number(value).toLocaleString()}`
}

export function generateRandomNumber(min, max) {
    return Math.random() * (max - min) + min

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

export async function apiRequest(url, method = "get", data = {}, config = {}) {
    const BASE_URL = "https://api.paymaker.online/api/"
    const BEARER_TOKEN = localStorage.getItem("bearer-token")
    try {
        const request = await axios({
            method: method,
            url: BASE_URL + url,
            data: data,
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        })
        return request
    } catch (err) {
        return err
    }
}

export function formatCardNumber(number) {
    const parsedNumber = String(number).replaceAll(" ", "")
    let output = parsedNumber[0]

    for (let i = 1; i < parsedNumber.length; i++) {
        if ((i + 1) % 4 === 0) {
            output += parsedNumber[i] + " "
        } else {
            output += parsedNumber[i]
        }

    }
    return output
}

export function obfuscateCardNumber(number) {
    const parsedNumber = String(number)
    let output = ""
    for (let i = 0; i < parsedNumber.length; i++) {
        if (i < parsedNumber.length - 4) {
            output += "*"
        } else {
            output += parsedNumber[i]
        }
    }
    return output
}

export function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1
    }

    var max = arr[0]
    var maxIndex = 0

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i
            max = arr[i]
        }
    }

    return maxIndex
}

export function findInArr(key, value, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            return i
        }
    }
    return -1
}

export function getDataFromArr(arr, key, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            return arr[i]
        }
    }
    return false
}

export const bankLogosRequiringWhiteBg = ["First Bank Nigeria Ltd"]


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