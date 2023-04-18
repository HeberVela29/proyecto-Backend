import ProductsDAOMongoDB from "../models/daos/Products.DAO.js";
const productsApi = new ProductsDAOMongoDB();

export async function getProducts() {
    const products = await productsApi.getAll();
    return products;
}

export async function getProductsById({ id }) {
    const product = await productsApi.getById(id);
    return product;
}

export async function saveProduct(newProduct) {
    const product = await productsApi.save(newProduct);
    return product;
}

export async function updateProduct({ newProduct }) {
    const product = await productsApi.update(newProduct);
    return product;
}

export async function deleteProduct({ id }) {
    const product = await productsApi.getById(id);
    await productsApi.delete(id);
    return product;
}