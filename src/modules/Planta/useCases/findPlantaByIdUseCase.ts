import { Injectable } from "@nestjs/common";
import { PlantaRepository } from "../repositories/PlantaRepository";

interface FindPlantaByIdRequest{
    id: string
}

@Injectable()
export class FindPlantaByIdUseCase{
    constructor(private plantaRepository:PlantaRepository){}

     execute({id}:FindPlantaByIdRequest){
        return this.plantaRepository.findById(id)
    }
}