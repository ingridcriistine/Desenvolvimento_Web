// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro1 = require('./src/controllers/cadastro1');
const cadastro2 = require('./src/controllers/cadastro2');
const cadastro3 = require('./src/controllers/cadastro3');
const editar = require('./src/controllers/editar');



// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/index', home.pagInicialGet);

route.get('/forms1', cadastro1.chamado);
route.post('/forms1', cadastro1.chamadoInsert);

route.get('/forms2', cadastro2.chamado);
route.post('/forms2', cadastro2.chamadoInsert);

route.get('/forms3', cadastro3.chamado);
route.post('/forms3', cadastro3.chamadoInsert);

route.get('/editarChamado/:id', editar.chamados);
route.post('/editarChamado/:id', editar.adicionar);

module.exports = route;