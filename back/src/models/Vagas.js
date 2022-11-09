const toCreateVagas = (model) => {
    return `INSERT INTO Vagas VALUES (${model.id_vaga},'${model.tipo}',${model.stat},${model.hr_ent},${model.hr_sai})`;
}

const toReadAll = () => {
    return "SELECT * FROM Vagas";
}


module.exports = {
    toCreateVagas,
    toReadAll
}