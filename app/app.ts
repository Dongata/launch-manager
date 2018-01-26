import * as express from 'express';
import * as bodyParser from 'body-parser';
import { routesConfig } from './routes/routes-config';
import { launchService } from './services/launch-service';
import { container, inject, singleton } from 'dependency-injection.ts';

var app = express();

app.use(bodyParser.json());
new routesConfig(app);

class App{
    @inject
    public launchserv : launchService;
}

module.exports = app;