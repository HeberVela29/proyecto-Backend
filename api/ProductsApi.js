const ERROR = { error: "Producto no encontrado" };

class ProductsApi {
  constructor() {
    this.products = [];
  }

  getAll() {
    return this.products;
  }

  getById(id) {
    const p = this.products.find((product) => product.id === id);
    if (p) {
      return p;
    }return ERROR;
  }

  create(p) {
    const arrayOfIds = this.products.map((product) => product.id);
    const maxId = arrayOfIds.length === 0 ? 0 : Math.max(...arrayOfIds);
    const id = maxId + 1;
    const newP = { id, ...p };
    this.products.push(newP);
  }

  updateById(id, p) {
    const foundP = this.products.find((product) => product.id === id);
    if (foundP) {
      const filteredProducts = this.products.filter((product) => product.id !== id);
      const newP = { id, ...p };
      this.products = [...filteredProducts, newP];
      return newP;
      }else {
        return ERROR;
      }
    }

  deleteById(id){
    const newProducts = this.products.filter(p => p.id != id);
    this.products = newProducts;
    return this.products;
  }
}

module.exports = ProductsApi;
