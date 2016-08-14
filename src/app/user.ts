/**
 * Created by Martin on 12/08/16.
 */

export class User {
    public id: number;
    public name: string;
    public tokens: Array<any>;

    constructor(obj:{id: number, name:string, tokens:Array<any>}) {
        this.id = obj.id;
        this.name = obj.name;
        this.tokens = obj.tokens;
    }
}