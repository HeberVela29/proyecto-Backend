import { expect } from "chai";
import mongoose from "mongoose";
import {
  actualizarProducto,
  agregarProducto,
  eliminarProducto,
  obtenerProductos,
} from "../src/services/axios.js";

const productoId = "64108b318106177954d52b72";

const producto = {
  _id: new mongoose.Types.ObjectId(productoId),
  id: "01GVG91HJJ0PGR5ESQ27CCZVT7",
  product: "Televisor",
  price: 35000,
  description: "Televisor LED 42",
  thumbnail: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/tv-256.png",
};

describe("API de productos", () => {
  it("debería obtener todos los productos", async () => {
    const response = await obtenerProductos();
    expect(response.data).to.be.an("array");
    expect(response.status).to.equal(200);
  });

  it("debería crear un nuevo producto", async () => {
    const response = await agregarProducto(producto);
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an("object");
    expect(response.data).to.have.property("id");
  });

  it("debería actualizar un producto existente", async () => {
    try {
      const productoActualizado = {
        _id: new mongoose.Types.ObjectId(productoId),
        id: "01GVG91HJJ0PGR5ESQ27CCZVT7",
        product: "Televisor",
        price: 35000,
        description: "Televisor LED 42",
        thumbnail: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/tv-256.png",
      };

      const response = await actualizarProducto(productoActualizado);
      expect(response.status).to.equal(200);
      expect(response.data)
        .to.be.an("object")
        .that.includes(productoActualizado);
    } catch (error) {
      console.error(error);
    }
  });

  it("debería eliminar un producto existente", async () => {
    try {
      const response = await eliminarProducto(productoId);
      expect(response.data).to.be.an('object').that.includes({
        message: 'Producto eliminado correctamente',
      });
    } catch (error) {
      console.error(error);
    }
  });
});
