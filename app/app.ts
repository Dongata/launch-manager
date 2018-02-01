import * as express from 'express';
import * as bodyParser from 'body-parser';
import { routesConfig } from './routes/routes-config';
import { Db } from './db';
import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from './model/errorResponse';

var app = express();

app.use(bodyParser.json());
Db.connect().then(()=>
{
    var rc : routesConfig = new routesConfig();
    rc.registerRoutes(app);
});

app.use(function(err : any, req:Request, res : Response, next : NextFunction){
    var type = typeof(err);
    console.log(type);

    if(type.toString() === 'ErrorResponse'){
        var error : ErrorResponse = err;
        res.status(error.status).json(error);
    }else{
        res.status(500).json(err);
    }
    next(err);
})

module.exports = app;