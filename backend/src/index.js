const express = require('express');
const cors = require('cors');
const routes = require('./routes');

/*
    Porta do BD: 3306
    Senha : root
*/

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);