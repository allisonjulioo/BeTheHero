const express = require('express');
const routes = express.Router();
const OngsController = require("./controller/ongs.controller");
const IncidentsController = require("./controller/incidents.controller");
const ProfileController = require("./controller/profile.controller");
const SessionController = require("./controller/session.controller");

routes.get('/ongs', OngsController.get);
routes.post('/ongs', OngsController.create);

routes.get('/profile', ProfileController.get);

routes.post('/sessions', SessionController.create);

routes.get('/incidents', IncidentsController.get);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);


module.exports = routes;