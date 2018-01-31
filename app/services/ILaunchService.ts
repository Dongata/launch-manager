import { Launch } from "../model/launch";

export interface ILaunchService{
    getAll() : Promise<Array<Launch>>;
}