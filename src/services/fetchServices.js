import User from "../models/User.js"
import UserActivity from "../models/UserActivity.js"
import UserAverageSessions from "../models/UserAverageSessions.js"


const USE_MOCK_DATA = true

/**
 * Returns the correct url based on the USE_MOCK_DATA flag
 *
 * @param {string} - mockURL
 * @param {string} - apiURL
 * @returns {string} - The correct url
 */
function getURL (mockURL, apiURL) {
  return USE_MOCK_DATA ? { url: mockURL, isMock: true } : { url: apiURL, isMock: false }
}


/**
 *  Fetches a user
 *
 * @param {string} userId
 * @returns {Promise<{id: number, firstName:string}>}
 */
export async function fetchUser (userId) {
  const { url, isMock } = getURL('/data/mockUserData.json', `http://localhost:3000/user/${userId}`)
  const responseData = await fetchService(url)

  let user
  if (isMock) {
    user = (responseData.find((user) => user.userId.toString() === userId))
  } else {
    user = responseData
  }

  return new User(user)
}

/**
 * Fetches a user's activity
 *
 * @param {string} userId
 * @returns {Promise<{id: number, sessions: Array<{
 *  day: string,
 *  kilogram: number,
 *  calories: number
 * }>}>}
 */
export async function fetchUserActivity (userId) {
  const { url, isMock } = getURL('/data/mockUserActivityData.json', `http://localhost:3000/user/${userId}/activity`)
  const responseData = await fetchService(url)

  let userActivity
  if (isMock) {
    userActivity = (responseData.find((userActivity) => userActivity.userId.toString() === userId))
  } else {
    userActivity = responseData
  }

  return new UserActivity(userActivity)
}


/**
 * Fetches a user's average sessions
 *
 * @param {string} userId
 * @returns {Promise<{id: number, sessions: Array<{
 *  day: string,
 *  sessionLength: number
 * }>}>}
 */
export async function fetchUserAverageSessions (userId) {
  const { url, isMock } = getURL('/data/mockUserAverageSessionsData.json', `http://localhost:3000/user/${userId}/average-sessions`)
  const responseData = await fetchService(url)

  let userAverageSessions
  if (isMock) {
    userAverageSessions = (responseData.find((userAverageSessions) => userAverageSessions.userId.toString() === userId))
  } else {
    userAverageSessions = responseData
  }

  return new UserAverageSessions(userAverageSessions)
}



/**
 * Fetches data from a given url
 *
 * @param {string} url - The url to fetch data from
 * @returns {Promise<Object>} - A promise that resolves to the parsed JSON data
 *
 * @throws {Error} - If the response is not ok
 */

async function fetchService (url) {
  try {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const responseData = jsonResponse.data

    return responseData
  } catch (error) {
    throw new Error('Fetch error : ${error}')
  }
}


