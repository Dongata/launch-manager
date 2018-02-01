"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var routes_config_1 = require("./routes/routes-config");
var db_1 = require("./db");
var app = express();
app.use(bodyParser.json());
db_1.Db.connect().then(function () {
    var rc = new routes_config_1.routesConfig();
    rc.registerRoutes(app);
});
app.use(function (err, req, res, next) {
    var type = typeof (err);
    console.log(type);
    if (type.toString() === 'ErrorResponse') {
        var error = err;
        res.status(error.status).json(error);
    }
    else {
        res.status(500).json(err);
    }
    next(err);
});
module.exports = app;
//# sourceMappingURL=app.js.map