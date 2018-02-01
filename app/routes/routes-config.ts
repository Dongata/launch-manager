import { Application } from 'express';
import { Route } from '../model/route';
import { exec } from 'child_process';

export class routesConfig{
    private controllerPath : string = `../controllers/{controller}.js`; 
    private express : Application;

    constructor(){
    }

    public registerRoutes(express : Application){
        var routes : Array<Route> = require('./routes-config.json');
        routes.forEach(a => {
            var b = this.findController(a.controller);
            new b(express, a.route);
        });
    }

    private findController(input : string) : any{
        return require(this.controllerPath.replace('{controller}', input))[input];
    }
}


