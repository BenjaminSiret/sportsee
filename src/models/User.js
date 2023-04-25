class User {
  constructor(data) {
    this.id = data.id
    this.firstName = data.userInfos.firstName
    this.lastName = data.userInfos.lastName
    this.age = data.userInfos.age
    this.todayScore = data.todayScore || data.score
    this.calorieCount = data.keyData.calorieCount
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
      { name: 'Calories', value: this.calorieCount },
      { name: 'Proteines', value: this.proteinCount },
      { name: 'Glucides', value: this.carbohydrateCount },
      { name: 'Lipides', value: this.lipidCount },
    ]
  }
}

export default User
