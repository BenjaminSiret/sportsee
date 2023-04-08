import User from "../models/User.js"
import UserActivity from "../models/UserActivity.js"
import UserAverageSessions from "../models/UserAverageSessions.js"

/**
 * Fetches a user from the mock data
 *
 * @param {string} userId
 * @returns {Promise<{id: number, firstName:string}>}
 */

export async function fetchUserFromMock (userId) {
  const responseData = await fetchService("/data/mockUserData.json")
  const user = (responseData.find((user) => user.id.toString() === userId))

  return new User(user)
}

/**
 * Fetches a user from the API
 *
 * @param {string} userId
 * @returns {Promise<{id: number, firstName:string}>}
 */
export async function fetchUserFromApi (userId) {
  const responseData = await fetchService(`http://localhost:3000/user/${userId}`)
  const user = new User(responseData)

  return user
}

/**
 * Fetches a user's activity from the mock data
 *
 * @param {string} userId
 * @returns {Promise<{id: number, sessions: Array<{
 *  day: string,
 *  kilogram: number,
 *  calories: number
 * }>}>}
 */
export async function fetchUserActivityFromMock (userId) {
  const responseData = await fetchService("/data/mockUserActivityData.json")
  const userActivity = (responseData.find((userActivity) => userActivity.userId.toString() === userId))

  return new UserActivity(userActivity)
}


/**
 * Fetches a user's activity from the API
 *
 * @param {string} userId
 * @returns {Promise<{id: number, sessions: Array<{
 *  day: string,
 *  kilogram: number,
 *  calories: number
 * }>}>}
 */
export async function fetchUserActivityFromApi (userId) {
  const responseData = await fetchService(`http://localhost:3000/user/${userId}/activity`)

  return new UserActivity(responseData)
}


/**
 * Fetches a user's average sessions from the API
 *
 * @param {string} userId
 * @returns {Promise<{id: number, sessions: Array<{
 *  day: string,
 *  sessionLength: number
 * }>}>}
 */
export async function fetchUserAverageSessionsFromApi (userId) {
  const responseData = await fetchService(`http://localhost:3000/user/${userId}/average-sessions`)

  return new UserAverageSessions(responseData)
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


