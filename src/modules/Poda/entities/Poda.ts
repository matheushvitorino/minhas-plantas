import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";

interface props{
    data: Date;
    descricao?: string;
}
export class Poda{
    private _id: string;
    private props: props;

    constructor(props: Replace<props, {data?: Date}>,id?:string){
        props ={
            
            ...props,
            data: props.data || new Date(),

        };
        this._id= id || randomUUID();
    }

    get id():string{
        return this._id;        
    }

    get data(): Date{
        return this.props.data;
    }

    get descricao(): string{
        return this.props.descricao || '';
    }

    set descricao(descricao: string){
        descricao = this.props.descricao || '';
    }


}