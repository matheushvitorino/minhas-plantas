import { Adubacao } from "../entites/Adubacao";
import { AdubacaoRepository } from "./adubacaoRepository";

export class AdubacaoRepositoryInMemory implements AdubacaoRepository{
    adubacoes: Adubacao[]=[]

    async create(adubacao: Adubacao): Promise<void> {
        if(adubacao.adubo){
            this.adubacoes.push(adubacao);
        }else{
            throw new Error("precisa de um adubo.");
        }
        
    }
    async findAll(): Promise<Adubacao[]> {
        return this.adubacoes
    }
    async findAdubacoesByPlantaId(id: string): Promise<Adubacao[]> {
        const adubacoes = this.adubacoes
        const adubacoes_by_planta : Adubacao[]=[]
        for(const adubacao of adubacoes){
            if (adubacao.planta_id === id){
                adubacoes_by_planta.push(adubacao);
            }
        }
        return adubacoes_by_planta

    }

}