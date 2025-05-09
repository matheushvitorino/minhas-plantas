import { Injectable } from "@nestjs/common";
import { EspecieRepository } from "../repositories/especieRepository";

@Injectable()
export class ListarEspecieUseCase{
    constructor( private especieRepository: EspecieRepository){}

    async findAll(){
        try{
            const especies = await this.especieRepository.findAll()
            return especies;
        }
        catch(error){
            throw error('erro ao criar especie.')
        }

    }
}