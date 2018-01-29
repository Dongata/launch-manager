import { Application, Response } from "express";
import { errorResponse } from "../model/errorResponse";

export abstract class BaseController {
    protected app : Application;
    protected baseRoute : string;

    constructor(app : Application, baseRoute : string) {
        this.app = app;
        this.baseRoute = baseRoute;
        this.registerRoutes();
    }

    protected abstract registerRoutes() : void;
} 