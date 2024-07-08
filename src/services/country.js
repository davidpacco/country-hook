import axios from "axios"

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name'

export const getCountry = async name => {
  try {
    const response = await axios.get(`${baseUrl}/${name}`)
    return response
  } catch (e) {
    return e.response
  }
}