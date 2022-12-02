const socket = io.connect()


//-------------------------------
// Tabla de productos

function addNewProduct () {
    const nombre = document.getElementById('nombre').value
    const precio = document.getElementById('precio').value
    const foto = document.getElementById('foto').value

    const newProduct = {
        title: nombre, 
        price: precio, 
        thumbnail: foto
    }

    socket.emit('new-product', newProduct)

    return false
}

function renderProducts(data) {
    const html = data.map(product => {
        return (`<tr> <td><strong>${product.title}</strong></td> <td><em>$${product.price}</em></td> <td><img src="${product.thumbnail}" alt="foto del producto" class="productsImage"></td> </tr>`)
    }).join(' ')

    document.getElementById('productos').innerHTML = html
}

//-----------------------------------------------------
// Chat de mensajes

function render(data) {
    const html = data.map(item => {
        return (`<div> <strong>${item.author}</strong> <span class="fecha">${new Date().toLocaleDateString('es-ES')} ${new Date().toLocaleTimeString()}</span> : <em class="texto-msj">${item.text}</em></div>`)
    }).join(' ')

    document.getElementById('message').innerHTML = html
}

function addMessage() {
    const authorName = document.getElementById('author').value
    const textMsn = document.getElementById('text').value

    const mensaje = {
        author: authorName,
        text: textMsn
    }
    
    document.getElementById('text').value = ''

    socket.emit('new-message', mensaje)

    return false
}

socket.on('message', data => {
    render(data)
})

socket.on('Products', data => {
    renderProducts(data)
})