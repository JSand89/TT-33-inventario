const express = require("express");
const {leerInventario} = require("../controllers/inventario")
const router = express.Router();

router.get("/", leerInventario)

module.exports = router