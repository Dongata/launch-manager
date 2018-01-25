import { Application } from "express";

export abstract class baseController {
    protected app : Application;
    protected baseRoute : string;

    constructor(app : Application, baseRoute : string) {
        this.app = app;
        this.baseRoute = baseRoute;
        this.registerRoutes();
    }

    protected abstract registerRoutes() : void;
} 