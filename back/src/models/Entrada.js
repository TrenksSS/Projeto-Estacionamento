const toCreateEntrada = (model) => {
    return `INSERT INTO entradas VALUES (${model.id_cliente},'${model.placa_veiculo}','${model.id_vaga}'${model.hr_ent},${model.hr_sai}${model.valor})`;
}

const toReadAll = () => {
    return "SELECT * FROM entradas";
}

const toUpdate = (model) => {
    return `UPDATE entradas SET 
    id_cliente = '${model.id_cliente}',
    placa_veiculo = '${model.placa_veiculo}',
    id_vaga = ${model.id_vaga},
    hr_ent = '${model.hr_ent}',
    hr_sai = ${model.hr_sai},
    valor = '${model.valor}'`;
}


module.exports = {
    toCreateEntrada,
    toReadAll,
    toUpdate
}