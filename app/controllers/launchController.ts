import { Application, Request, Response, NextFunction } from "express";
import { BaseController } from "./baseController";
import { errorResponse } from "../model/errorResponse";
import { LaunchService } from "../services/LaunchService";

export class LaunchController extends BaseController{
    private launchService : LaunchService;

    protected registerRoutes(){
        this.app.get(this.baseRoute, this.Get.bind(this));
        this.app.get(this.baseRoute + '/:id', this.GetOne.bind(this));
        this.launchService = new LaunchService();
    }
    
    private Get(req : Request, res : Response){
        res.json(this.launchService.getAll());
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