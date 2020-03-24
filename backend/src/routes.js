const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router();

routes.get('/', (req, res) =>{
    //Mensagem do endpoint raíz para testar se o servidor subiu
    return res.json({ message: `Works!!! ${req.query.name}` });
});

//Configuração das rotas da aplicação

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;