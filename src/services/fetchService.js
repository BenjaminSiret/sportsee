import User from "../models/User.js";
import UserActivity from "../models/UserActivity.js";

/**
 * Fetches a user from the API
 *
 * @param {string} userId
 * @returns {Promise<{id: number, name:string}>}
 */

export async function fetchUserFromMock(userId) {
  const response = await fetch("/data/mockUserData.json");
  const jsonResponse = await response.json();
  const responseData = jsonResponse.data;
  const user = (responseData.find((user) => user.id.toString() === userId));

  return new User(user);
}


export async function fetchUserFromApi(userId) {
  const response = await fetch(`http://localhost:3000/user/${userId}`);
  const jsonResponse = await response.json();
  const responseData = jsonResponse.data;
  const user = new User(responseData);

  return user;
}


export async function fetchUserActivityFromMock(userId) {
  const response = await fetch("/data/mockUserActivity.json");
  const jsonResponse = await response.json();
  const responseData = jsonResponse.data;
  const userActivity = (responseData.find((userActivity) => userActivity.userId.toString() === userId));

  return new UserActivity(userActivity);
}

