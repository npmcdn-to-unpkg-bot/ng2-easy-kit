/**
 * Created by Martin on 12/08/16.
 */

export class Topic {
    public id: number;
    public name: string;

    constructor(obj:{id: number, name:string }) {
        this.id = obj.id;
        this.name = obj.name;
    }

}