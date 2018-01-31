import { Launch } from "../model/launch";
import { ILaunchService } from "./ILaunchService";
import { LaunchRepository } from "../repositories/LaunchRepository";

export class LaunchService implements ILaunchService{
    private launchRepository : LaunchRepository;
    
    constructor() {
        this.launchRepository = new LaunchRepository();
    }

    public async getAll() : Promise<Array<Launch>>{
        return await this.launchRepository.getAll();
    }
}