const toCreateFuncionario = (model) => {
    return `INSERT INTO funcionarios VALUES (${model.cpf},'${model.nome}','${model.senha}')`;
}

const toReadAll = () => {
    return "SELECT * FROM funcionarios";
}
const del = (model) => {
    return `DELETE FROM funcionarios WHERE cpf = ${model}`;
}


module.exports = {
    toCreateFuncionario,
    toReadAll,
    del

}