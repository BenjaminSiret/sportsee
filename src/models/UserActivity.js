class UserActivity {
  constructor(data) {
    this.id = data.userId
    this.sessions = data.sessions.map(session => ({
      day: new Date(session.day).getDate(),
      kilogram: session.kilogram,
      calories: session.calories,
    }))
  }
}

export default UserActivity
