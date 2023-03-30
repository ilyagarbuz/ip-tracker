const API_KEY = "a2fe82f928e84f3096400fcb3dee816c"

export const fetchIpData = async () => {
  try {
    const response = await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=" + API_KEY)
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error(error)
  }
}
