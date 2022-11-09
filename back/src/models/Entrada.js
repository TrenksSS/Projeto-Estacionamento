const toCreateEntrada = (model) => {
    return `INSERT INTO entradas VALUES (${model.id_cliente},'${model.placa_veiculo}','${model.id_vaga}')`;
}

const toReadAll = () => {
    return "SELECT * FROM entradas";
}


module.exports = {
    toCreateEntrada,
    toReadAll
}