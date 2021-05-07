const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

let color = `rgb(${Math.random() * 255, Math.random() * 255, Math.random() * 255})`
// ctx.fillStyle = color 
// ctx.fillRect(20, 20, 5, 5)

canvas.onmousemove = (e) => {
    // console.log(e)
    socket.emit('sendSqToServer', { x: e.clientX, y: e.clientY, color })
}



let socket = io();



socket.on('drawASquare', (coords) => drawSquare(coords))

function drawSquare({ x, y, color }) {
    ctx.fillStyle = color
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