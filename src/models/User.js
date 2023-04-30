class User {
  /**
   * @param {Object} data
   * @property {string} id - The user's id
   * @property {string} firstName - The user's first name
   * @property {string} lastName - The user's last name
   * @property {number} age - The user's age
   * @property {number} todayScore - The user's today score
   * @property {number} calorieCount - The user's calorie count
   * @property {number} proteinCount - The user's protein count
   * @property {number} carbohydrateCount - The user's carbohydrate count
   * @property {number} lipidCount - The user's lipid count
   */

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

  /**
   * Returns the user's first name
   *
   * @returns {string} - the user's first name
   */
  getFirstName () {
    return this.firstName
  }

  /**
   * Return an array of the user's today score
   *
   * @returns {array} - today's score
   */
  getTodayScore () {
    return [{ todayScore: this.todayScore }]
  }

  /**
   * Format and Returns the user's nutrition stats
   *
   * @returns {array} - the user's nutrition stats
   */
  getNutritionStats () {
    return [
      { name: 'Calories', value: this.calorieCount.toLocaleString('en-US'), unit: 'kCal' },
      { name: 'Proteines', value: this.proteinCount.toLocaleString('en-US'), unit: 'g' },
      { name: 'Glucides', value: this.carbohydrateCount.toLocaleString('en-US'), unit: 'g' },
      { name: 'Lipides', value: this.lipidCount.toLocaleString('en-US'), unit: 'g' },
    ]
  }
}

export default User
