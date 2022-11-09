const toCreateVagas = (model) => {
    return `INSERT INTO Vagas VALUES (${model.id_vaga},'${model.tipo}',${model.stat},${model.hr_ent},${model.hr_sai})`;
}

const toReadAll = () => {
    return "SELECT * FROM Vagas";
}

const toUpdate = (model) => {
    return `UPDATE vagas SET 
    id_vaga = '${model.id_vaga}',
    tipo = '${model.tipo}',
    stat = ${model.stat},
    hr_ent = '${model.hr_ent}',
    hr_sai = ${model.hr_sai}`;
}


module.exports = {
    toCreateVagas,
    toReadAll,
    toUpdate

}