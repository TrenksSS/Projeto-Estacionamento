const Item = require('../models/Vagas');
const con = require('../models/estacionamentoDAO');

const cadVagas = (req, res) => {
    con.query(Item.toCreateVagas(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarVagas = (req, res) => {
    con.query(Item.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}
module.exports = {
    cadVagas,
    listarVagas,
}