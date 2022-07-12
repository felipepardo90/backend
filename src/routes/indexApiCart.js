const { Router } = require("express");
const { newCart } = require("../controllers/apiCartController");
const cartControllers = require("../controllers/apiCartController")
const router = Router(); 

router.post("/", newCart);
// router.delete("/:id/productos", deleteCartById);
router.get("/:id/productos", cartControllers.getAllProductsInCart);
// router.post("/:id/productos", addProductsToCart);
// router.delete("/:id/productos/:id_prod", deleteProductFromCartById);

module.exports = router;