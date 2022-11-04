const toCreateCli = (model) => {
    return `INSERT INTO clientes VALUES (${model.id_cliente},'${model.nome}','${model.telefone}')`;
}

const toReadAll = () => {
    return "SELECT * FROM clientes";
}
const toCreateVag = (model) => {
    return `INSERT INTO vagas VALUES (${model.id_vaga},${model.tipo},${model.stat})`
}


module.exports = {
    toCreateCli,
    toReadAll,
    toCreateVag
}