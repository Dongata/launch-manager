"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var routes_config_1 = require("./routes/routes-config");
var app = express();
app.use(bodyParser.json());
var rc = new routes_config_1.routesConfig();
rc.registerRoutes(app);
module.exports = app;
//# sourceMappingURL=app.js.map