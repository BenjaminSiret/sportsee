class UserAverageSession {
  constructor(data) {
    this.id = data.userId
    this.sessions = data.sessions.map(session => ({
      day: new Date(session.day).getDate(),
      sessionLength: session.sessionLength,
    }))
  }
}

export default UserAverageSession
