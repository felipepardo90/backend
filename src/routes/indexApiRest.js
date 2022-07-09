const { Router } = require("express");
const { getAll, getProductById} = require("../controllers/apiRestControllers");
const router = Router(); 

router.get("/", getAll);
router.get("/:id", getProductById);

module.exports = router;
