const toCreateVeiculo = (model) => {
    return `INSERT INTO Veiculo VALUES (${model.id_cliente},'${model.placa_veiculo}','${model.cor}','${model.modelo}','${model.tipo_veiculo}')`;
}

const toReadAll = () => {
    return "SELECT * FROM Veiculo";
}


module.exports = {
    toCreateVeiculo,
    toReadAll
}