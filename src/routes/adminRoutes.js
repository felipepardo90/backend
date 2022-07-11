const { Router } = require("express");
const adminControllers = require("../controllers/apiRestControllers");
const adminCartControllers = require("../controllers/apiCartController");
const router = Router();

// PRODUCTOS

router.get("/api/productos", adminControllers.getAll);
router.get("/api/productos/:id", adminControllers.getProductById);
router.post("/api/productos", adminControllers.postProduct);
router.put("/api/productos/:id", adminControllers.putProduct);
router.delete("/api/productos/:id", adminControllers.deleteProduct);

// CARRITO

router.post("/api/carrito", adminCartControllers.newCart);
// router.delete("/api/carrito/:id", deleteCartById);
// router.get("/api/carrito/:id/productos", getAllProductsInCart);
// router.post("/api/carrito/:id/productos", addProductsToCart);
// router.delete("/api/carrito/:id/productos/:id_prod", deleteProductFromCartById);

module.exports = router;
