const toCreateFuncionario = (model) => {
    return `INSERT INTO funcionarios VALUES (${model.cpf},'${model.nome_func}','${model.senha}')`;
}

const toReadAll = () => {
    return "SELECT * FROM funcionarios";
}
const del = (model) => {
    return `DELETE FROM funcionarios WHERE cpf = ${model.cpf}`;
}


module.exports = {
    toCreateFuncionario,
    toReadAll,
    del

}