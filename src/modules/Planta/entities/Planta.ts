import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";
import { Adubacao } from "../../Adubacao/entites/Adubacao";


interface PlantaSchema{
    nome: string;
    descricao?: string;
    createdAt: Date;
    especie_id: string;
}
export class Planta {

    private _id: string;
    private props: PlantaSchema;
    private adubacoes: string[] = [];


    constructor(props: Replace<PlantaSchema, { createdAt?: Date }>, id?: string) {
        this._id = id || randomUUID();
        this.props ={
            ...props,
            createdAt: props.createdAt || new Date(),
        };
        
    }

    public addAdubacao(adubacao_id: string): void {
        this.adubacoes.push(adubacao_id);
    }

    public listarAdubacoes(): string[] {
        return this.adubacoes;
    }


    get id(): string{
        return this._id;
    }
    get nome(): string{
        return this.props.nome;
    }
    set nome(nome: string){ 
        this.props.nome = nome;
    }
    get descricao(): string{
        return this.props.descricao || '';
    }
    set descricao(descricao: string){
        this.props.descricao = descricao;
    }
    get createdAt(): Date{
        return this.props.createdAt;
    }

    get especie_id(): string{
        return this.props.especie_id;
    }
}