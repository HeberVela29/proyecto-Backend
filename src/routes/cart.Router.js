const express = require('express')

const { Router } = express;
const carritosRouter = new Router();

const ContenedorArchivosCarritos = require('../contenedores/ContenedorArchivosCarritos');
const ContenedorArchivo = require('../contenedores/ContenedorArchivo');

const CartService = new ContenedorArchivosCarritos("./db/dbCarritos.json");
const ProductService = new ContenedorArchivo("./db/dbProductos.json");

carritosRouter.post('/', async (req, res) => {
    res.json(await CartService.newCart());
})

carritosRouter.delete('/:id', async (req, res) => {
    res.json(await CartService.borrar(req.params.id));
})

carritosRouter.get('/:id/products', async (req, res) => {
    res.json(await CartService.listar(parseInt(req.params.id)));
})


carritosRouter.post('/:idCart/:idProduct/products', async (req, res) => {
    const newProduct = await ProductService.listar(req.params.idProduct);
    res.json(await CartService.actualizar(newProduct, parseInt(req.params.idCart)))
})


carritosRouter.delete('/:idCart/:idProduct/products', async (req, res) => {
    res.json(await CartService.borrarProducto(parseInt(req.params.idCart), parseInt(req.params.idProduct)));
})

module.exports = carritosRouter