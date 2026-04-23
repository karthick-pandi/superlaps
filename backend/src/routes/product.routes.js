const router = require("express").Router();
const controller = require("../controllers/product.controller");

router.get("/products", controller.searchProducts);
router.get("/products/:id", controller.getProduct);

module.exports = router;