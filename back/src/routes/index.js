const express = require('express');
const router = express.Router();

const Item = require("../controllers/ItemController");

router.post("/estacionamento/itens", Item.cadCliente);
router.get("/estacionamento/itens", Item.listarCli);
router.get("/estacionamento/itens/:ni", Item.listarItem);
router.get("/estacionamento/itens/nome/:denominacao", Item.listarItemNome);
router.get("/estacionamento/itens/data/:aquisicao", Item.listarItemData);
router.put("/estacionamento/itens", Item.alterarItem);
router.delete("/estacionamento/itens/:ni", Item.excluirItem);

module.exports = router;