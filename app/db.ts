import * as mongoose from 'mongoose'
import { Schema } from 'mongoose';

export class Db{
    public static connection : any;
    public static launchSchema : Schema;

    public static connect():void{
        var mongooseconnection = mongoose.connect('//127.0.0.1:27017/launch-manager').then(a=>{
            a.connection.on('error', console.error.bind(console, 'connection error:'));
            this.connection = a.connection;
        });
    }

    private static registerSchemas(){
        this.launchSchema = new Schema({
            id : Number,
            name : String
        });
    }
}
