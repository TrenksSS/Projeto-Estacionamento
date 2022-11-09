const Item = require('../models/Veiculo');
const con = require('../models/estacionamentoDAO');

const cadVeiculo = (req, res) => {
    con.query(Item.toCreateVeiculo(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarVeiculo = (req, res) => {
    con.query(Item.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}
module.exports = {
    cadVeiculo,
    listarVeiculo,
}