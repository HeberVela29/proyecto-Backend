const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: Socket } = require('socket.io');

const ProductsApi = require("./api/ProductsApi.js");
const producto = new ProductsApi();

const ChatApi = require('./api/ChatApi.js');
const chat = new ChatApi();
//--------------------------------------------
// Instancio servidor, socket y api
const app = express();
const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

//--------------------------------------------
//  Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//--------------------------------------------

// Config socket
io.on('connection', socket => {
    console.log('Nuevo cliente conectado!');
    //productos
    const productos = producto.getAll();
    socket.emit('productos', productos);

    socket.on('newProduct', data => {
        producto.create(data);
        io.sockets.emit('productos', productos);
    });
    //mensajes
    const messages = chat.getAll();
    socket.emit('messages', messages);
    
    socket.on('newMessage', message => {
        chat.newMessage(message);
        io.sockets.emit('messages', messages);
    })
});

//--------------------------------------------

// Inicio server

const PORT = 8080;
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`);
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`));