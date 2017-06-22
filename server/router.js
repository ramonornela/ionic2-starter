var path = require('path');
var jsonServer = require('@ramonornela/json-server');

module.exports = function(router, app) {
	var express = require('express');

	var router = function(router, app) {
		app.use(jsonServer.bodyParser);
		var expressRouter = express.Router();

		expressRouter.post('/auth', function(req, res) {
		  var usuario =  router.db
                           .get('usuarios')
			               .find({ cpf: req.body.cpf, senha: req.body.senha })
			               .value();

          if (!usuario) {
			  res.status(401).end();
			  return;
		  }
		  res.json([usuario]);
		});

		return expressRouter;
	}

	return {
		"__source": path.join(__dirname, 'db.json'),
		"__router": router
	}
}
