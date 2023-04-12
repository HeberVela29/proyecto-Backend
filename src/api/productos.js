import { Router } from 'express';
import ProductsDAOMongoDB from "../models/daos/Products.DAO.js";

export const api = Router();

const productsApi = new ProductsDAOMongoDB();

api.get('/', async (req, res) => {
  const prods = await productsApi.getAll();

  res.send(prods);
});

api.get('/:id', async (req, res) => {
  const id = req.params.id;
  const prod = await productsApi.getById(id);

  res.send(prod);
});

api.post('/', async (req, res) => {
  const producto = req.body;
  const prod = await productsApi.save(producto);

  res.send(prod);
});

api.put('/:id', async (req, res) => {
  const idProductoActualizar = req.params.id;

  const productoActualizado = req.body;
  const updatedProduct = await productsApi.update(
    idProductoActualizar,
    productoActualizado
  );

  res.send(updatedProduct);
});

api.delete('/:id', async (req, res) => {
  const id = req.params.id;

  await productsApi.delete(id);

  res.send({ message: 'Producto eliminado correctamente' });
});