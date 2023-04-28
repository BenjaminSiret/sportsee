class User {
  constructor(data) {
    this.id = data.id
    this.firstName = data.userInfos.firstName
    this.lastName = data.userInfos.lastName
    this.age = data.userInfos.age
    this.todayScore = data.todayScore || data.score
    this.calorieCount = data.keyData.calorieCount.toLocaleString('en-US')
    this.proteinCount = data.keyData.proteinCount
    this.carbohydrateCount = data.keyData.carbohydrateCount
    this.lipidCount = data.keyData.lipidCount
  }

  getFirstName () {
    return this.firstName
  }
  getTodayScore () {
    return [{ todayScore: this.todayScore }]
  }

  getNutritionStats () {
    return [
      { name: 'Calories', value: this.calorieCount, unit: 'kCal' },
      { name: 'Proteines', value: this.proteinCount, unit: 'g' },
      { name: 'Glucides', value: this.carbohydrateCount, unit: 'g' },
      { name: 'Lipides', value: this.lipidCount, unit: 'g' },
    ]
  }
}

export default User
