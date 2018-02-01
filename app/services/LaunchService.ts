import { Launch } from "../model/launch";
import { ILaunchService } from "./ILaunchService";
import { LaunchRepository } from "../repositories/LaunchRepository";
import { ErrorResponse } from "../model/errorResponse";
import { ObjectId } from "mongodb";

export class LaunchService implements ILaunchService{
    private launchRepository : LaunchRepository;
    
    constructor() {
        this.launchRepository = new LaunchRepository();
    }

    public async getAll() : Promise<Array<Launch>>{
        return this.launchRepository.getAll();
    }

    public async find(id:string) : Promise<Launch>{
        if(id.length !== 24){
            throw new ErrorResponse("id should have 24 chars", 422);
        }
        
        return this.launchRepository.find(new ObjectId(id));
    }

    public async add(input:Launch){
        this.launchRepository.add(input);
    }
}