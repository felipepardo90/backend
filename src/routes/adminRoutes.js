const { Router } = require("express");
const {
  getAll,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/apiRestControllers");

const {
  newCart,
//   deleteCartById,
//   getAllProductsInCart,
//   addProductsToCart,
//   deleteProductFromCartById,
} = require("../controllers/apiCartController");
const router = Router();

// PRODUCTOS

router.get("/api/productos", getAll);
router.get("/api/productos/:id", getProductById);
router.post("/api/productos", postProduct);
router.put("/api/productos/:id", putProduct);
router.delete("/api/productos/:id", deleteProduct);

// CARRITO

router.post("/api/carrito", newCart);
// router.delete("/api/carrito/:id", deleteCartById);
// router.get("/api/carrito/:id/productos", getAllProductsInCart);
// router.post("/api/carrito/:id/productos", addProductsToCart);
// router.delete("/api/carrito/:id/productos/:id_prod", deleteProductFromCartById);

module.exports = router;
