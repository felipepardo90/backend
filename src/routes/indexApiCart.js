const { Router } = require("express");
const { newCart } = require("../controllers/apiCartController");
const router = Router(); 

router.get("/", newCart);
// router.delete("/:id/productos", deleteCartById);
// router.get("/:id/productos", getAllProductsInCart);
// router.post("/:id/productos", addProductsToCart);
// router.delete("/:id/productos/:id_prod", deleteProductFromCartById);

module.exports = router;