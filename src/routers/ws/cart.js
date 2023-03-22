import express from "express";
import { Server as HttpServer } from "http";
import { Server as Socket } from "socket.io";

import ContainerMongoDB from "../../models/containers/ContainerMongoDB.js";
import productSchema from "../../models/schemas/productSchema.js";
import cartSchema from "../../models/schemas/cartSchema.js";
import userSchema from "../../models/schemas/userSchema.js";
import { sendAdminWppMessage, sendClientWppMessage } from "../../utils/twilio/twilio.js";
import { sendNewPurchaseEmail } from "../../utils/nodemailer/nodemailer.js";

const productsApi = new ContainerMongoDB(productSchema);
const cartApi = new ContainerMongoDB(cartSchema);
const usersApi = new ContainerMongoDB(userSchema);

const app = express();
const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

export default async function configurarSocket(socket) {
  // ---- CARRITO ----
  // carga de productos
  socket.on("getItemsCart", async (userEmail) => {
    const cart = await getCart(userEmail);
    const cartItems = cart.items;

    socket.emit("itemsCart", cartItems);
  });

  // eliminar producto del carrito
  socket.on("deleteProduct", async (deleteProduct) => {
    const cart = await getCart(deleteProduct.cartID);
    const product = await getProduct(deleteProduct.productID);
    const cartItems = cart.items;

    const newCartItems = await cartItems.filter(
      (item) => item.id !== product.id
    );

    const newCart = {
      id: deleteProduct.cartID,
      items: newCartItems,
    };
    await cartApi.update(newCart);

    const updateCart = await getCart(newCart.id);
    const updateCartItems = updateCart.items;
    socket.emit("itemsCart", updateCartItems);
  });

  // realizar compra
  socket.on("makePruchase", async (userEmail) => {
    const cart = await getCart(userEmail);
    const purchase = {
      email: userEmail,
      items: cart.items,
    };
    const client = await getClient(userEmail);

    sendAdminWppMessage(purchase);
    sendNewPurchaseEmail(client, purchase);

    sendClientWppMessage(client);

    const newCart = {
      id: userEmail,
      items: [],
    };

    await cartApi.update(newCart);
    socket.emit("purchaseMade");
  });
}

async function getCart(cartID) {
  const cart = await cartApi.getById(cartID);
  return cart[0];
}

async function getProduct(productID) {
  const product = await productsApi.getById(productID);
  return product[0];
}

async function getClient(userEmail) {
  const usersDB = await usersApi.getAll();
  const client = usersDB.filter((user) => user.email == userEmail);
  return client[0];
}
