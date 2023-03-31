/**
 * Fetches a user from the API
 *
 * @param {string} userId
 * @returns {Promise<{id: number, name:string}>}
 */

export async function fetchUser(userId) {
  const response = await fetch("/data/users.json");
  const users = await response.json();

  return users.find(user => user.id.toString() === userId);
}
