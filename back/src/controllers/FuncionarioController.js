const Item = require('../models/Funcionario');
const con = require('../models/estacionamentoDAO');

const cadFuncionario = (req, res) => {
    console.log(req.body)
    con.query(Item.toCreateFuncionario(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarFunc = (req, res) => {
    con.query(Item.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const ExcluirFunc = (req, res) => {
        con.query(Item.del(req.params.cpf), (err, result) => {
            if (err == null)
                if (result.affectedRows > 0)
                    res.status(204).json(req.params).end();
                else
                    res.status(404).end();
            else
                res.status(400).json(err).end();
        });
    }



module.exports = {
    cadFuncionario,
    listarFunc,
    ExcluirFunc

}