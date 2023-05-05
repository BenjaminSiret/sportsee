class UserActivity {
  /**
   * @param {Object} data
   * @property {string} id - The user's id
   * @property {array} sessions - The user's sessions (day, kilogram, calories)
   */
  constructor(data) {
    this.id = data.userId
    this.sessions = data.sessions.map(session => ({
      day: this.getFormatedDay(session.day),
      kilogram: session.kilogram,
      calories: session.calories,
    }))
  }

  /**
   * Returns the formated day
   *
   * @param {date} - day
   * @returns {number} - formated day
   */
  getFormatedDay (day) {
    return new Date(day).getDate()
  }
}

export default UserActivity
