import { Launch } from "../model/launch";
import { ILaunchService } from "./ILaunchService";

export class LaunchService implements ILaunchService{
    public getAll() : Array<Launch>{
        return [
            {
                id : 1,
                name : "asd"
            },
            {
                id : 2,
                name : "asd"
            },
            {
                id : 3,
                name : "asd"
            }
        ]
    }
}