const express = require('express');

const TribunalController = require('./controllers/TribunalController');
const UnidadeController = require('./controllers/UnidadeController');
const AlertasController = require('./controllers/AlertaController');

const routes = express.Router();

//tribunais
routes.get('/tribunais', TribunalController.listTribunais); //lista todos os tribunais
routes.get('/tribunal/:id', TribunalController.getTribunal);
routes.get('/tribunal/unidades/:id', TribunalController.unidadesTribunal);

//Unidades
routes.get('/unidades', UnidadeController.listUnidades);
routes.get('/unidade/:id', UnidadeController.getUnidade);
routes.get('/unidade/pai/:id_pai', UnidadeController.paiUnidade);

//alertas
routes.get('/alertas', AlertasController.listAlerts);
routes.get('/alertas/quantidade', AlertasController.quantidadeAlertas);
routes.get('/alertas/detalhamento', AlertasController.AlertasDetalhados);


module.exports = routes;