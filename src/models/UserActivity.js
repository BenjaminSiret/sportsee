class UserActivity {
  constructor(data) {
    this.id = data.userId;
    this.sessions = data.sessions.map(session => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }
}

export default UserActivity;
