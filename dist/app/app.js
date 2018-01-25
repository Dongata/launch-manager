"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var routes_config_1 = require("./routes/routes-config");
var app = express();
app.use(bodyParser.json());
new routes_config_1.routesConfig(app);
//app.use('/api', (a, b, c) =>{ b.json({'coso' : 'coso'}); });
module.exports = app;
//# sourceMappingURL=app.js.map