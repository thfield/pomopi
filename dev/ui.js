// update time
/** @function updateTime
 * @param {number} time - time in seconds
 */
function updateTime (time) {
  let minDisp = document.getElementById('pomo-min')
  let secDisp = document.getElementById('pomo-sec')

  let minutes = Math.floor(time / 60)
  let seconds = time % 60

  minDisp.innerText = str_pad_left(minutes,'0',2)
  secDisp.innerText = str_pad_left(seconds,'0',2)

  return time
}

function str_pad_left (string,pad,length) {
  return (new Array(length+1).join(pad)+string).slice(-length)
}


// update
