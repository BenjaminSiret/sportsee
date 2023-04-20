class UserPerformance {
  constructor(data) {
    this.id = data.userId
    this.kind = data.kind
    this.data = data.data.map((item) => {
      return {
        kind: this.kind[item.kind],
        value: item.value
      }
    })
  }
}

export default UserPerformance
