class UserActivity {
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
