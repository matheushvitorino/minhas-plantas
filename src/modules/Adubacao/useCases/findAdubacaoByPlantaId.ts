import { Injectable } from "@nestjs/common";
import { AdubacaoRepository } from "../repositories/adubacaoRepository";
import { Adubacao } from "../entites/Adubacao";

interface ListarAdubacaoPlantaRequest{
    id: string
}

@Injectable()
export class FindAdubacoesByPlantaId{
    constructor(private adubacaoRepository: AdubacaoRepository){}
    async execute({id}:ListarAdubacaoPlantaRequest): Promise<Adubacao[]>{
        const adubacoes = await this.adubacaoRepository.findAdubacoesByPlantaId(id)
        return adubacoes;
    }
}