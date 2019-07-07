(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Pomo = require('./pomo.js')

let pomo = new Pomo(0.04, 0.02, 0.03, 2)
let res = pomo.minToMilliSec(0.0167)

console.log(pomo.workTime)
console.log(pomo.breakTime)
console.log(pomo.longBreakTime)
console.log(pomo.setLength)

// console.log(Pomo)
},{"./pomo.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
