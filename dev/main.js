const Pomo = require('./pomo.js')

let pomo = new Pomo(0.04, 0.02, 0.03, 2)
let res = pomo.minToMilliSec(0.0167)

console.log(pomo.workTime)
console.log(pomo.breakTime)
console.log(pomo.longBreakTime)
console.log(pomo.setLength)

// console.log(Pomo)