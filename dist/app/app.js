"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use('/api', function (a, b, c) { b.json({ 'coso': 'coso' }); });
module.exports = app;
//# sourceMappingURL=app.js.map