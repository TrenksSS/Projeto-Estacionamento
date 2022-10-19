const express = require('express');
const router = express.Router();

const Item = require("../controllers/ItemController");

router.post("/estacionamento/itens", Item.cadCliente);
router.get("/estacionamento/itens", Item.listarCli);

module.exports = router;