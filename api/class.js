const error = { Error: "Producto no encontrado" };

class Container {
  constructor() {
    this.products = [];
  }

  getAll() {
    return this.products;
  }

  getById(id) {
    const obj = this.products.find((product) => product.id === id);
    if (obj) {
      return obj;
    } else {
      return error;
    }
  }

  create(obj) {
    const arrayIds = this.products.map((product) => product.id);
    const maxId = arrayIds.length === 0 ? 0 : Math.max(...arrayIds);
    const id = maxId + 1;
    const newObj = { id, ...obj };
    this.products.push(newObj);
    return newObj;
  }

  updateById(id, obj) {
    const foundObj = this.products.find((product) => product.id === id);
    if (foundObj) {
      const filteredProducts = this.products.filter((product) => product.id !== id);
      const newObj = { id, ...obj };
      this.products = [...filteredProducts, newObj];
      return newObj;
    } else {
      return error;
    }
  }

  deleteById(id) {
    const foundObj = this.products.find((product) => product.id === id);
    if (foundObj) {
      const newData = this.products.filter(obj => obj.id !== id);
      this.products = newData;
      return newData;
    } else {
      return error;
    }
  }
}

module.exports = Container;
