import { Injectable } from "@nestjs/common";
import { EspecieRepository } from "../repositories/especieRepository";

@Injectable()
export class FindAllEspecieUseCase{
    constructor( private especieRepository: EspecieRepository){}

    async execute(){
        try{
            const especies = await this.especieRepository.findAll()
            return especies;
        }
        catch(error){
            throw error('erro ao criar especie.')
        }

    }
}