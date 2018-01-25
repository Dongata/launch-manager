import { Application } from 'express';
import { route } from '../model/route';

export class routesConfig{
    private controllerPath : string = `./controllers/{controller}.js`; 

    constructor(express : Application){
        var routes : Array<route> = require('routes-config.json');
        routes.forEach(a => {
            express.use(a.route, this.findController(a.controller));
        });
    }

    private findController(input : string) : any{
        return require(this.controllerPath.replace('{controller}', input));
    }
}