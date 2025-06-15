const express = require('express');
const {
    getProduct,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controller/product controller");

const router = express.Router();

router.post("/add", createProduct)

router.get("/getAll", getAllProducts)

router.get("/getSingle/:id", getProduct)

router.put("/update/:id", updateProduct)

router.delete("/delete/:id", deleteProduct)

module.exports = router;