import { ObjectId } from "mongodb";

export class Launch{
    public name : string;
    public description : string;
    public components : Array<string>;
    public price : number;
    public date : Date;
    public id : ObjectId;

    constructor(name:string, date : Date, price : number, description:string, components:Array<string>, id : ObjectId) {
        this.name = name;
        this.description = description;
        this.components = components;
        this.price = price;
        this.date = date;
        this.id = id;
    }
}