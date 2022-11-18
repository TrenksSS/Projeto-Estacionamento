const toCreateCli = (model) => {
    return `INSERT INTO clientes VALUES (${model.id},'${model.nome}',${model.tel})`;
}

const toReadAll = () => {
    return "SELECT * FROM clientes";
}

module.exports = {
    toCreateCli,
    toReadAll
}