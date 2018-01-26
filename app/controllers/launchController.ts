import { Application, Request, Response, NextFunction } from "express";
import { baseController } from "./baseController";
import { errorResponse } from "../model/errorResponse";
import { inject } from "dependency-injection.ts/lib/src/inject";
import { launchService } from "../services/launch-service";

export class launchController extends baseController{
    @inject
    private _launchService : launchService;

    protected registerRoutes(){
        this.app.get(this.baseRoute, this.Get);
        this.app.get(this.baseRoute + '/:id', this.GetOne);
    }
    
    private Get(req : Request, res : Response){
        res.json(this._launchService.getAll());
    }

    private GetOne(req : Request, res : Response){
        var id : number = parseInt(req.params.id);
        if(!id){
            res.statusCode = 400;
            res.json(new errorResponse("Id should be int"));
        }else{
            res.json({"asd" : "asd" + id });
        }
    }
}