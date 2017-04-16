
var x
var arr = []
var input = []
var audio = []
var onOff = 0
var difficulty = 0

function random () {
  x = Math.floor((Math.random() * 4) + 1)
}

function mode () {
  if (difficulty === 0) {
    difficulty = 1
    document.querySelector('.mode').style.backgroundColor = "#ff0000"
    document.querySelector('.mode').style.borderColor = "#ff0000"
    document.querySelector('.mode').innerHTML = 'HARD'
  } else {
    difficulty = 0
    document.querySelector('.mode').style.backgroundColor = "#8c4ed3"
    document.querySelector('.mode').style.borderColor = "#8c4ed3"
    document.querySelector('.mode').innerHTML = 'MODE'

  }
}

audio[0] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
audio[1] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
audio[2] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
audio[3] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')

function on () {
  if (onOff === 0) {
    onOff = 1
    document.querySelector('.on').style.marginLeft = '52%'
    document.querySelector('.on').innerHTML = 'ON'
  } else {
    document.querySelector('.on').style.marginLeft = '2%'
    document.querySelector('.on').innerHTML = 'OFF'
    onOff = 0
    arr = []
    input = []
    difficulty = 0
    document.querySelector('.counter').innerHTML = '00'
  }
  allFlash()
}

function allFlash () {
  document.querySelector('.green-btn').style.backgroundColor = '#3fff6b'
  document.querySelector('.green-btn').style.borderColor = '#3fff6b'
  document.querySelector('.red-btn').style.backgroundColor = '#ff6558'
  document.querySelector('.red-btn').style.borderColor = '#ff6558'
  document.querySelector('.yellow-btn').style.backgroundColor = '#ff6'
  document.querySelector('.yellow-btn').style.borderColor = '#ff6'
  document.querySelector('.blue-btn').style.backgroundColor = '#3badff'
  document.querySelector('.blue-btn').style.borderColor = '#3badff'
  setTimeout(function () {
    document.querySelector('.green-btn').style.backgroundColor = '#00a526'
    document.querySelector('.green-btn').style.borderColor = '#00a526'
    document.querySelector('.red-btn').style.backgroundColor = '#ff2614'
    document.querySelector('.red-btn').style.borderColor = '#ff2614'
    document.querySelector('.yellow-btn').style.backgroundColor = '#ffcf06'
    document.querySelector('.yellow-btn').style.borderColor = '#ffcf06'
    document.querySelector('.blue-btn').style.backgroundColor = '#007bd4'
    document.querySelector('.blue-btn').style.borderColor = '#007bd4'
  }, 300)
}

function start () {
  if (onOff === 1) {
    random()
    arr.push(x)
    pattern()
  }
}

function pattern () {
  for (var c = 0; c < arr.length; c++) {
    switch (arr[c]) {
      case 1:
        setTimeout(function () {
          audio[0].play()
          document.querySelector('.green-btn').style.backgroundColor = '#3fff6b'
          document.querySelector('.green-btn').style.borderColor = '#3fff6b'
          setTimeout(function () {
            document.querySelector('.green-btn').style.backgroundColor = '#00a526'
            document.querySelector('.green-btn').style.borderColor = '#00a526'
          }, 500)
        }, c * 750)
        break
      case 2:
        setTimeout(function () {
          audio[1].play()
          document.querySelector('.red-btn').style.backgroundColor = '#ff6558'
          document.querySelector('.red-btn').style.borderColor = '#ff6558'
          setTimeout(function () {
            document.querySelector('.red-btn').style.backgroundColor = '#ff2614'
            document.querySelector('.red-btn').style.borderColor = '#ff2614'
          }, 500)
        }, c * 750)
        break
      case 3:
        setTimeout(function () {
          audio[2].play()
          document.querySelector('.yellow-btn').style.backgroundColor = '#ff6'
          document.querySelector('.yellow-btn').style.borderColor = '#ff6'
          setTimeout(function () {
            document.querySelector('.yellow-btn').style.backgroundColor = '#ffcf06'
            document.querySelector('.yellow-btn').style.borderColor = '#ffcf06'
          }, 500)
        }, c * 750)
        break
      case 4:
        setTimeout(function () {
          audio[3].play()
          document.querySelector('.blue-btn').style.backgroundColor = '#3badff'
          document.querySelector('.blue-btn').style.borderColor = '#3badff'
          setTimeout(function () {
            document.querySelector('.blue-btn').style.backgroundColor = '#007bd4'
            document.querySelector('.blue-btn').style.borderColor = '#007bd4'
          }, 500)
        }, c * 750)
        break
      default:
    }
  }
  console.log(arr)
}

function wrong () {
  input = []
  console.log('incorrect')
  audio[0].play()
  audio[1].play()
  audio[2].play()
  audio[3].play()
  setTimeout (function () {
    pattern()
  }, 2000)
  if (difficulty === 1) {
    arr = []
    start()
  }
}

function winner () {
  allFlash()
  setTimeout(function () {
    allFlash()
  }, 1000)
  setTimeout(function () {
    audio[0].play()
    document.querySelector('.green-btn').style.backgroundColor = '#3fff6b'
    document.querySelector('.green-btn').style.borderColor = '#3fff6b'
    setTimeout(function () {
      document.querySelector('.green-btn').style.backgroundColor = '#00a526'
      document.querySelector('.green-btn').style.borderColor = '#00a526'
    }, 300)
  }, 1500)
  setTimeout(function () {
    audio[1].play()
    document.querySelector('.red-btn').style.backgroundColor = '#ff6558'
    document.querySelector('.red-btn').style.borderColor = '#ff6558'
    setTimeout(function () {
      document.querySelector('.red-btn').style.backgroundColor = '#ff2614'
      document.querySelector('.red-btn').style.borderColor = '#ff2614'
    }, 300)
  }, 2000)
  setTimeout(function () {
    audio[3].play()
    document.querySelector('.blue-btn').style.backgroundColor = '#3badff'
    document.querySelector('.blue-btn').style.borderColor = '#3badff'
    setTimeout(function () {
      document.querySelector('.blue-btn').style.backgroundColor = '#007bd4'
      document.querySelector('.blue-btn').style.borderColor = '#007bd4'
    }, 300)
  }, 2500)
  setTimeout(function () {
    audio[2].play()
    document.querySelector('.yellow-btn').style.backgroundColor = '#ff6'
    document.querySelector('.yellow-btn').style.borderColor = '#ff6'
    setTimeout(function () {
      document.querySelector('.yellow-btn').style.backgroundColor = '#ffcf06'
      document.querySelector('.yellow-btn').style.borderColor = '#ffcf06'
    }, 300)
  }, 3000)
  setTimeout(function () {
    allFlash()
  }, 3500)
  arr = []
  input = []
  document.querySelector('.counter').innerHTML = '00'
  on()
}

function check () {
  for (var i = 0; i < input.length; i++) {
    if (arr[i] === input[i]) {
      console.log('correct')
    } else {
      wrong()
    }
  }
  if (arr.length === 20 && arr[19] === input[19]) {
    setTimeout(function () {
      winner()
    }, 1000)
  } else if (input.length === arr.length) {
    document.querySelector('.counter').innerHTML = arr.length
    setTimeout(function () {
      start()
    }, 1500)
    input = []
  }
}

//INPUT BUTTONS

function green () {
  input.push(1)
  audio[0].play()
  document.querySelector('.green-btn').style.backgroundColor = '#3fff6b'
  document.querySelector('.green-btn').style.borderColor = '#3fff6b'
  setTimeout(function () {
    document.querySelector('.green-btn').style.backgroundColor = '#00a526'
    document.querySelector('.green-btn').style.borderColor = '#00a526'
  }, 300)
  console.log('green')
  check()
}

function red () {
  input.push(2)
  audio[1].play()
  document.querySelector('.red-btn').style.backgroundColor = '#ff6558'
  document.querySelector('.red-btn').style.borderColor = '#ff6558'
  setTimeout(function () {
    document.querySelector('.red-btn').style.backgroundColor = '#ff2614'
    document.querySelector('.red-btn').style.borderColor = '#ff2614'
  }, 300)
  console.log('red')
  check()
}

function yellow () {
  input.push(3)
  audio[2].play()
  document.querySelector('.yellow-btn').style.backgroundColor = '#ff6'
  document.querySelector('.yellow-btn').style.borderColor = '#ff6'
  setTimeout(function () {
    document.querySelector('.yellow-btn').style.backgroundColor = '#ffcf06'
    document.querySelector('.yellow-btn').style.borderColor = '#ffcf06'
  }, 300)
  console.log('yellow')
  check()
}

function blue () {
  input.push(4)
  audio[3].play()
  document.querySelector('.blue-btn').style.backgroundColor = '#3badff'
  document.querySelector('.blue-btn').style.borderColor = '#3badff'
  setTimeout(function () {
    document.querySelector('.blue-btn').style.backgroundColor = '#007bd4'
    document.querySelector('.blue-btn').style.borderColor = '#007bd4'
  }, 300)
  console.log('blue')
  check()
}

window.onload = function () {
  console.log(document.querySelector('.start').innerHTML)
}
