const toCreateCli = (model) => {
    return `INSERT INTO clientes VALUES (${model.id_cliente},'${model.nome}','${model.telefone}')`;
}

const toReadAll = () => {
    return "SELECT * FROM clientes";
}


module.exports = {
    toCreateCli,
    toReadAll
}