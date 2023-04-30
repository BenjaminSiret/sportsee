class UserActivity {
  constructor(data) {
    this.id = data.userId
    this.sessions = data.sessions.map(session => ({
      day: this.getFormatedDay(session.day),
      kilogram: session.kilogram,
      calories: session.calories,
    }))
  }


  getFormatedDay (day) {
    return new Date(day).getDate()
  }
}

export default UserActivity
