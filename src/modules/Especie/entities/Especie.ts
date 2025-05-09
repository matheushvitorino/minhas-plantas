import { randomUUID } from "crypto";

interface EspecieSchema{
    nome:string;
    descricao?: string;
}
export class Especie{
    private _id: string;
    private props: EspecieSchema;

    constructor(props: EspecieSchema, id?: string) {
        this.props = props;
        this._id = id || randomUUID();
    }

    get id():string{
        return this._id;
    }

    get nome():string{
        return this.props.nome;
    }

    set nome(nome:string){
        this.props.nome = nome;
    }

    get descricao():string{
        return this.props.descricao || '';
    }

    set descricao(descricao:string){
        this.props.descricao = descricao;
    }
} 