import * as express from 'express';
import * as bodyParser from 'body-parser';
import { routesConfig } from './routes/routes-config';

var app = express();

app.use(bodyParser.json());
var rc : routesConfig = new routesConfig();
rc.registerRoutes(app);
module.exports = app;