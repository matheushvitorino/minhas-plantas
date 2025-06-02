import { Injectable } from "@nestjs/common";
import { AdubacaoRepository } from "../repositories/adubacaoRepository";
import { Adubacao } from "../entites/Adubacao";

@Injectable()
export class FindAllAdubacaoUseCase{
    constructor( private adubacaoRepository: AdubacaoRepository){}

    async execute(): Promise<Adubacao[]>{
            try{const adubacoes = await this.adubacaoRepository.findAll();
                return adubacoes;}
                
            catch(error){
                throw new Error('erro ao buscar todas as adubacoes')}
        }
}