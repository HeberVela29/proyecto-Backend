const express = require("express");
const Container = require("../api/class");

const router = express.Router();
const container = new Container();

router.get("/", (_req, res) => {
  const products = container.getAll();
  try {
    res.render("products", {products: products, empty: products.length === 0 ? true : false})
} catch (error) {
    console.log("Error", error);
}
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const product = container.getById(parseInt(id));
  res.send(product);
});

router.post("/", (req, res) => {
  const obj = req.body;
  const newProduct = container.create(obj);
  res.redirect("/")
  res.send(newProduct);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const obj = req.body;
  const updatedProduct = container.updateById(parseInt(id), obj);
  res.send(updatedProduct);
});


router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const obj = req.body;
  const product = container.deleteById(parseInt(id), obj);
  res.send(product);
});

module.exports = router;
