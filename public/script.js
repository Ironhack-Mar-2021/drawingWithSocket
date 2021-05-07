const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

ctx.fillStyle = 'purple'
ctx.fillRect(20, 20, 5, 5)

canvas.onmousemove = (e) => {
    // console.log(e)
    socket.emit('sendSqToServer', { x: e.clientX, y: e.clientY })
}



let socket = io();



socket.on('drawASquare', (coords) => drawSquare(coords))

function drawSquare({ x, y }) {
    ctx.fillRect(x, y, 5, 5)
}





document.querySelector('button').onclick = function () {
    socket.emit('I clicked the button')
}

socket.on('buttonClicked', () => {
    console.log('button ccliked')
})

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}, 20000)