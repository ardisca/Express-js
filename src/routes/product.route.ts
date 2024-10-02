import express from "express";

export const productRouter = express.Router();

const productList = [
  { id: 1, name: "baju", price: 1000 },
  { id: 2, name: "kemeja", price: 1000 },
  { id: 3, name: "kaos", price: 1000 },
];

productRouter.get("/", (_, res) => {
  res.status(200).json({ message: "Hello Product Sucses", data: productList });
});

productRouter.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const productById = productList.find((item) => item.id == productId);
  if (productById) {
    res
      .status(200)
      .json({ message: "Hello Product Sucses", data: productById });
  } else {
    res.status(400).json({ message: "Product tidak ditemukan" });
  }
});

productRouter.post("/", (_, res) => {
  res.status(200).json({ message: "Ini Product. POST" });
});
