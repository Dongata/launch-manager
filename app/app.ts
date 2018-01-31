import * as express from 'express';
import * as bodyParser from 'body-parser';
import { routesConfig } from './routes/routes-config';
import { Db } from './db';

var app = express();

app.use(bodyParser.json());
Db.connect().then(()=>
{
    var rc : routesConfig = new routesConfig();
    rc.registerRoutes(app);
});
module.exports = app;