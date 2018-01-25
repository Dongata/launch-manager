import { Application, Request, Response, NextFunction } from "express";
import { baseController } from "./baseController";

export class launchController extends baseController{

    protected registerRoutes(){
        this.app.get(this.baseRoute, this.Get);
    }
    
    private Get(req:Request, res:Response){
        res.json([{"asd" : "asd1"}, {"asd" : "asd2"}]);
    }

    private GetOne(req:Request, res:Response){
        res.json({"asd" : "asd1"});
    }
}