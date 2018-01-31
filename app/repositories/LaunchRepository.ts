import { Collection, model } from "mongoose";
import { BaseRepository } from "./BaseRepository";
import { Launch } from "../model/launch";
import { Db } from "../db";

export class LaunchRepository extends BaseRepository{
    private collection : Collection;

    constructor() {
        super();
        this.collection = new Collection('launch', Db.connection);
        
    }

    /**
     * GetAll
     */
    public async getAll() : Promise<Array<Launch>> {
        console.log(this.collection.find());
        var res = await this.collection.find().toArray();
        return res.map(function(a:any) {return new Launch(a.id, a.name)});
    }
}