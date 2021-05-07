const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 5000;


io.on('connection', (socket) => {
    console.log('connected', socket.id)
    socket.on('I clicked the button', msg => {
        //console.log("hurray")
        io.emit('buttonClicked')
        //io.emit('chat message', msg);
    });


    socket.on('sendSqToServer', coords => {
        io.emit('drawASquare', coords)
    })

});




app.use(express.static('public'))

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/public/index.html')
})

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});

// app.listen(process.env.PORT || 5000, () => console.log('Listenting to Port'))