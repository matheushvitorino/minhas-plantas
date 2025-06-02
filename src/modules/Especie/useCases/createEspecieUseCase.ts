import { Injectable } from "@nestjs/common";
import { EspecieRepository } from "../repositories/especieRepository";
import { Especie } from "../entities/Especie";

interface EspecieSchema{
    nome:string;
    descricao?: string;
}
@Injectable()
export class CreateEspecieUseCase{
    constructor(private especieRepository:EspecieRepository){}
    async execute({nome,descricao}:EspecieSchema){
        if(!nome || nome.trim() === ""){
            throw new Error("Nome é obrigatório!")
        }
        const especie = new Especie({
            nome,
            descricao,
        });
        this.especieRepository.create(especie);
        return especie;


    }
}