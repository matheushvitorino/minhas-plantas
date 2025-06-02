import { Adubacao } from "../entites/Adubacao";

export abstract class AdubacaoRepository{
    abstract create(adubacao: Adubacao): Promise<void>;
    abstract findAll(): Promise<Adubacao[]>;
    abstract findAdubacoesByPlantaId(id:string):Promise<Adubacao[]>
}