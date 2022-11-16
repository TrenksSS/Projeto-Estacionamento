const express = require('express');
const router = express.Router();

const Cliente = require("../controllers/ClienteController");
const Veiculo = require("../controllers/VeiculosController");
const Funcionario = require("../controllers/FuncionarioController");
const Vagas = require("../controllers/VagasController");
const Entrada = require("../controllers/EntradaController");


router.post("/estacionamento/Cliente", Cliente.cadCliente);
router.get("/estacionamento/Cliente", Cliente.listarCli);
router.post("/estacionamento/Veiculo",Veiculo.cadVeiculo);
router.get("/estacionamento/Veiculo",Veiculo.listarVeiculo);
router.post("/estacionamento/Vagas",Vagas.cadVagas);
router.get("/estacionamento/Vagas",Vagas.listarVagas);
router.put("/estacionamento/Vagas",Vagas.alterarVaga)
router.post("/estacionamento/Funcionarios",Funcionario.cadFuncionario);
router.get("/estacionamento/Funcionarios",Funcionario.listarFunc);
router.delete("/estacionamento/Funcionarios",Funcionario.ExcluirFunc);
router.post("/estacionamento/Entrada",Entrada.cadEntrada);
router.get("/estacionamento/Entrada",Entrada.listarEnt);
router.put("/estacionamento/Entrada",Entrada.alterarEntrada);


module.exports = router;