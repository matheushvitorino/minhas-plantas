import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";

interface RegaSchema{
    rega: boolean;
    data: Date;
}
export class Rega{
    private _id: string;
    private props: RegaSchema;

    constructor(props: Replace<RegaSchema,{data?:Date}>,id?: string){
        this.props ={
            ...props,
            data: props.data || new Date(),
            rega: props.rega || false,

        };
        this._id =id || randomUUID();
    }
     
    get id(): string{
        return this._id;
    }

    get rega(): boolean{
        return this.props.rega;
    }

    set rega(rega: boolean){
        rega = this.props.rega;
    }

    get data(): Date{
        return this.props.data;
    }

}