const express = require('express');
const cors = require('cors');

const itens = require('./src/routes/index');

const app = express();
app.use(express.json());
app.use(cors());
app.use(itens);

app.listen(3004, () => {
    console.log("Respondendo na porta 3004");
});