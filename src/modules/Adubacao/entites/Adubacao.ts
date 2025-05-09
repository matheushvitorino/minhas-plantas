import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";

interface AdubacaoSchema {
    created_at: Date;
    adubo: string;
    quantidade?: string;
    observacao?: string;
    proxima_adubacao?: Date;
    planta_id: string;
}


export class Adubacao{
    private _id: string;
    private props: AdubacaoSchema;

    constructor(props :Replace<AdubacaoSchema,{created_at?: Date}>, id?: string, proxima_adubacao?: Date){ 
        const createdAt= props.created_at || new Date();
        const proximaAdubacao = new Date(createdAt)
        proximaAdubacao.setDate(createdAt.getDate())+15
        this.props = {
            ...props,
            created_at: createdAt,
            proxima_adubacao: proxima_adubacao || proximaAdubacao,
        };
        this._id = id || randomUUID();
    }
    
    
    get id(): string{
        return this._id
    }

    get adubo(): string{
        return this.props.adubo;
    }

    set adubo(adubo: string){
        this.props.adubo = adubo;
    }
    get quantidade(): string{
        return this.props.quantidade || '';
    }

    set quantidade(quantidade: string){
        this.props.quantidade = quantidade;
    }
    get observacao(): string{
        return this.props.observacao || '';
    }

    set observacao(observacao: string){
        this.props.observacao = observacao;
    }
    get proxima_adubacao(): Date | null{
        return this.props.proxima_adubacao || null;
    }

    set proxima_adubacao(proxima_adubacao: Date){
        this.props.proxima_adubacao = proxima_adubacao;
    }
    get planta_id(): string{
        return this.props.planta_id;
    }

    set planta_id(planta_id: string){
        this.props.planta_id = planta_id;
    }

    get created_at(): Date{
        return this.props.created_at;
    }

    get id_planta(): string{
        return this.id_planta
    }

}
