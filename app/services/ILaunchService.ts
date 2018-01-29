import { Launch } from "../model/launch";

export interface ILaunchService{
    getAll() : Array<Launch>;
}