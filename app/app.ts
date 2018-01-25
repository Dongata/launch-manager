import * as express from 'express';
import * as bodyParser from 'body-parser';
import { routesConfig } from './routes/routes-config';

var app = express();

app.use(bodyParser.json());
new routesConfig(app);
//app.use('/api', (a, b, c) =>{ b.json({'coso' : 'coso'}); });

module.exports = app;