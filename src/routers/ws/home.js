import express from "express";
import { Server as HttpServer } from "http";
import { Server as Socket } from "socket.io";

import ContainerMongoDB from "../../models/containers/ContainerMongoDB.js";
import productSchema from "../../models/schemas/productSchema.js";
import cartSchema from "../../models/schemas/cartSchema.js";
const productsApi = new ContainerMongoDB(productSchema);
const cartApi = new ContainerMongoDB(cartSchema);

const app = express();
const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

export default async function configurarSocket(socket) {
  // ---- PRODUCTOS ----
  // carga de productos
  socket.on("getProducts", async()=>{
    const productsDB = await getProducts();

    socket.emit("products", productsDB);
  });

  // ---- CARRITO ----
  // agregar producto al carrito
  socket.on("addProduct", async (addingProduct) => {
    const cart = await getCart(addingProduct.cartID);
    const product = await getProduct(addingProduct.productID);
    const cartItems = cart.items;
    await cartItems.push(product);

    const newCart = {
      id: addingProduct.cartID,
      items: cartItems
    }

    await cartApi.update(newCart);

    socket.emit("addedProduct", product);
  });
}

async function getProducts (){
  const productsDB = await productsApi.getAll();
  return productsDB;
}

async function getCart (cartID){
  const cart = await cartApi.getById(cartID);
  return cart[0];
}

async function getProduct(productID){
  const product = await productsApi.getById(productID);
  return product[0];
}
