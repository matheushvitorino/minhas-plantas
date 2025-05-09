import { Injectable } from "@nestjs/common";
import { AdubacaoRepository } from "../repositories/adubacaoRepository";
import { Adubacao } from "../entites/Adubacao";

interface ListarAdubacaoPlantaRequest{
    id: string
}

@Injectable()
export class ListarAdubacaoPlantaUseCase{
    constructor(private adubacaoRepository: AdubacaoRepository){}
    async execute({id}:ListarAdubacaoPlantaRequest): Promise<Adubacao[]>{
        const adubacoes = await this.adubacaoRepository.findByPlanta(id)
        return adubacoes;
    }
}