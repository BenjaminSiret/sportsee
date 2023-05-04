class UserPerformance {
  constructor(data) {
    this.id = data.userId
    this.kind = data.kind
    this.data = this.mapTranslatedData(data.data)
  }

  /**
   *  Returns a mapped array of data, kinds are reversed to be correctly displayed
   *
   * @param {array} - raw data array
   * @returns {array}- mapped data
   */
  mapTranslatedData (dataArray) {
    return dataArray.map((item) => {
      return {
        kind: this.translatedKind(item.kind),
        value: item.value,
      }
    }).reverse()
  }

  /**
   * Translates the kind key to its French name
   *
   * @param {string} - kindKey
   * @returns {string} - translated name
   */
  translatedKind (kindKey) {
    const translations = {
      cardio: "Cardio",
      strength: "Force",
      energy: "Energie",
      speed: "Vitesse",
      endurance: "Endurance",
      intensity: "Intensité",
    }

    const kindName = this.kind[kindKey]
    const translatedName = translations[kindName]

    return translatedName
  }
}

export default UserPerformance
