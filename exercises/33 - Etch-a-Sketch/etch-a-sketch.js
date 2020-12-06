const canvas = document.querySelector('#etch-a-sketch')
const ctx = canvas.getContext('2d')
const shake = document.querySelector('.shake')

const MOVE_AMOUNT = 10
const HUE_CHANGE_AMOUNT = 10

const { width, height } = canvas

let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)

ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = MOVE_AMOUNT

let hue = 0
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
ctx.beginPath()
ctx.moveTo(x, y)
ctx.lineTo(x, y)
ctx.stroke()

function draw({ key }) {
  // Change the color of the line
  hue += HUE_CHANGE_AMOUNT
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

  // Start the path
  ctx.beginPath()
  ctx.moveTo(x, y)

  // Move x and y values
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT
      break
    case 'ArrowDown':
      y += MOVE_AMOUNT
      break
    case 'ArrowRight':
      x += MOVE_AMOUNT
      break
    case 'ArrowLeft':
      x -= MOVE_AMOUNT
      break
    default:
      break
  }

  ctx.lineTo(x, y)
  ctx.stroke()
}

function handleKey(e) {
  if (e.key.includes('Arrow')) {
    draw({ key: e.key })
    e.preventDefault()
  }
}

function clearCanvas() {
  canvas.classList.add('shake')
  ctx.clearRect(0, 0, width, height)
  canvas.addEventListener(
    'animationend',
    () => {
      canvas.classList.remove('shake')
    },
    { once: true }
  )
}

shake.addEventListener('click', clearCanvas)

window.addEventListener('keydown', handleKey)
