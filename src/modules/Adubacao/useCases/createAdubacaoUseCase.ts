import { Injectable } from "@nestjs/common";
import { AdubacaoRepository } from "../repositories/adubacaoRepository";
import { Adubacao } from "../entites/Adubacao";

interface CreateAdubacaoRequest{
    adubo: string;
    quantidade?: string;
    observacao?: string;
    planta_id: string;
}
@Injectable()
export class CreateAdubacaoUseCase{
    constructor(private adubacaoRepository:AdubacaoRepository){}
    async execute({
        adubo,
        quantidade,
        observacao,
        planta_id,
    }: CreateAdubacaoRequest){
        const adubacao = new Adubacao(
            {
                adubo,
                quantidade,
                observacao,
                planta_id,
            });
            await this.adubacaoRepository.create(adubacao);
            return adubacao;
        }
    }
