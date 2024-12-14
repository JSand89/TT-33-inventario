const express = require("express");
const {leerInventario, crear,leerElementoPorId} = require("../controllers/inventario")
const router = express.Router();

router.get("/", leerInventario)
router.get("/:id",leerElementoPorId)
router.post("/",crear)

module.exports = router