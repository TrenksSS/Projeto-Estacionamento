const toCreateVagas = (model) => {
    return `INSERT INTO Vagas VALUES (${model.id},'${model.tipo}',${model.chec})`;
}

const toReadAll = () => {
    return "SELECT * FROM Vagas";
}

const toUpdate = (model) => {
    return `UPDATE vagas SET 
    id_vaga = '${model.id_vaga}',
    tipo = '${model.tipo}',
    stat = ${model.stat},
   `;
}


module.exports = {
    toCreateVagas,
    toReadAll,
    toUpdate
}