const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IO } = require('socket.io')

//--------------------------------------------
// instancio servidor, socket y api
const app = express()
const httpServer = new HttpServer(app)
const io = new IO(httpServer)

//--------------------------------------------
// Config socket
const messages = [
    { author: 'App', text: 'Hola' },
]
const Products = []

io.on('connection', socket => {
    console.log('Nueva conexión');

    // Historial de mensajes
    socket.emit('message', messages)

    // Guardamos y enviamos mensaje
    socket.on('new-message', data => {
        messages.push(data)
        io.sockets.emit('message', messages)
    })

    // Historial de productos
    socket.emit('Products', Products)

    // Guardamos y enviamos producto
    socket.on('new-product', data => {
        Products.push(data)

        io.sockets.emit('Products', Products)
    })

})

//--------------------------------------------
//  Middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//--------------------------------------------
// Inicio server

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))