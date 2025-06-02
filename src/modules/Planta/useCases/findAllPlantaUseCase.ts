import { Injectable } from "@nestjs/common";
import { PlantaRepository } from "../repositories/PlantaRepository";
import { Planta } from "../entities/Planta";

@Injectable()
export class FindAllPlantaUseCase{
    constructor(private plantaRepository: PlantaRepository){}
    async execute(): Promise<Planta[]>{
        try{const plantas = await this.plantaRepository.findAll();
            return plantas;}
            
        catch(error){
            throw new Error('erro ao buscar todas as plantas')}
    }
}
