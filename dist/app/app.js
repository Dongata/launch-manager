"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var routes_config_1 = require("./routes/routes-config");
var launch_service_1 = require("./services/launch-service");
var dependency_injection_ts_1 = require("dependency-injection.ts");
var app = express();
app.use(bodyParser.json());
new routes_config_1.routesConfig(app);
var App = /** @class */ (function () {
    function App() {
    }
    __decorate([
        dependency_injection_ts_1.inject,
        __metadata("design:type", launch_service_1.launchService)
    ], App.prototype, "launchserv", void 0);
    return App;
}());
module.exports = app;
//# sourceMappingURL=app.js.map