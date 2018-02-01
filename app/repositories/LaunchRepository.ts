import { Collection, model } from "mongoose";
import { BaseRepository } from "./BaseRepository";
import { Launch } from "../model/launch";
import { Db } from "../db";
import { ObjectId } from "mongodb";

export class LaunchRepository extends BaseRepository{
    private collection : Collection;

    constructor() {
        super();
        this.collection = new Collection('launch', Db.connection);
        
    }

    public async getAll() : Promise<Array<Launch>> {
        var res = await this.collection.find().toArray();
        return res.map(this.map);
    }

    public async find(id:ObjectId) : Promise<Launch> {
        var res = await this.collection.find({_id:id}).toArray();
        return this.map(res[0]);
    }

    public async add(input:Launch){
        this.collection.insertOne(input);
    }

    private map(a:any) : Launch {
        return new Launch(a.name, a.date, a.price, a.desctiption, a.components, a._id)
    }
}