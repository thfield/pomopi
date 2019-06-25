class Pomo {
  constructor(workTime=25, breakTime=5, longBreakTime=15, setLength=4) {
    this.workTime = this.minToMilliSec(workTime)
    this.breakTime = this.minToMilliSec(breakTime)
    this.longBreakTime = this.minToMilliSec(longBreakTime)
    this.setLength = setLength
    this.completedSets = 0
  }

  minToMilliSec (min) {
    return Math.floor(min * 60) * 1000
  }

  finishBreak (length) {
    let self = this
    self.completedSets += 1
    // reveal startWork button in UI
  }

  startBreak (length) {
    let self = this

    // wait for start confirmation
    setTimeout(self.finishWork, self.workTime)
  }

  finishWork () {
    let self = this
    let breakLength = self.breakTime

    if (self.completedSets === self.setLength){
      breakLength = self.longBreakTime
    }

    //reveal startbreak button in ui
  }

  startWork () {
    let self = this
    // start timer
    setTimeout(self.finishWork, self.workTime)
  }

  startSet () {
    let self = this
    // reset the completed sets
    self.completedSets = 0

    self.startWork()
  }

}

module.exports = Pomo
