require('dotenv').config(); //para simular variaveis de ambientes. eu posso criar um arquivo na raiz do package.json. com final .env e lá dentro eu posso criar quantas variaveis de ambientes eu quiser.

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    return res.json('tudo ok');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor em pé na porta ${port}`)
});