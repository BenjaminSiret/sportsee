class UserAverageSession {
  constructor(data) {
    this.id = data.userId
    this.sessions = data.sessions.map(session => ({
      day: this.getDayLetter(session.day),
      sessionLength: session.sessionLength,
    }))
  }

  getDayLetter (dayNumber) {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return days[dayNumber - 1]
  }
}

export default UserAverageSession
