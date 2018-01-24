import * as express from 'express';
import * as bodyParser from 'body-parser';

var app = express();

app.use(bodyParser.json());
app.use('/api', (a, b, c) =>{ b.json({'coso' : 'coso'}); });

module.exports = app;