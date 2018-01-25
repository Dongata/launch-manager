import { Application } from "express";

export class launchController{
    private app : Application;

    constructor(app : Application){
        this.app = app;

        this.registerRoutes();
    }

    private registerRoutes(){
        //this.app.route()
    }
    
}