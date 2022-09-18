import { useEffect, useState } from "react"
import axios from "axios"

export default function usePayMakerAPI() {
  const BASE_URL = "https://paymaker.io/api/"
  const apiRequest = async (url, method = "get", data = {}, config = {}) => {
    try {
      const request = await axios({
        method: method,
        url: BASE_URL + url,
        data: data,
        withCredentials: true,
        headers: {
          Authorization: ``,
        },
      })
      return request
    } catch (err) {
      return false
    }
  }

  const [userInfo, setUserInfo] = useState({})

  return { apiRequest, userInfo, setUserInfo }
}
