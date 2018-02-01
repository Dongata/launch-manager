import { Application, Request, Response, NextFunction } from "express";
import { BaseController } from "./baseController";
import { ErrorResponse } from "../model/errorResponse";
import { LaunchService } from "../services/LaunchService";
import { Launch } from "../model/launch";

export class LaunchController extends BaseController{
    private launchService : LaunchService;

    protected registerRoutes(){
        this.app.get(this.baseRoute, this.Get.bind(this));
        this.app.get(this.baseRoute + '/:id', this.GetOne.bind(this));
        this.app.post(this.baseRoute, this.Post.bind(this));
        this.app.put(this.baseRoute + '/:id', this.Put.bind(this))
        this.launchService = new LaunchService();
    }
    
    private async Get(req : Request, res : Response, next : NextFunction){
        res.json(await this.launchService.getAll());
        next();
    }

    private async GetOne(req : Request, res : Response, next : NextFunction){
        var id : string = req.params.id;
        res.json(await this.launchService.find(id).catch());
        next();
    }

    private async Post(req : Request, res : Response, next : NextFunction){
        var input = this.getAndValidateBody(req, res);
        await this.launchService.add(input);
        res.json("Launch Created");
        next();
    }

    private async Put(req : Request, res : Response, next : NextFunction){
        var input = this.getAndValidateBody(req, res);
        await this.launchService.add(input)
        res.json("Launch Created");
        next();
    }

    private getAndValidateBody(req : Request, res : Response) : Launch{
        var input : Launch = req.body;

        if(!input){
            throw new ErrorResponse('body is obligatory', 400);
        }

        return input;
    }
}