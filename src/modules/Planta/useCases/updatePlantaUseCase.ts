import { Injectable } from "@nestjs/common";
import { PlantaRepository } from "../repositories/PlantaRepository";
import { Planta } from "../entities/Planta";

interface UpdatePlantaRequest{
    id:string
    nome: string;
    descricao?: string;
    especie_id: string;
}
@Injectable()
export class UpdatePlantaUseCase{
    constructor(private plantaRepository:PlantaRepository){}

    execute({nome,descricao,especie_id}:UpdatePlantaRequest){
        const planta = new Planta({
            nome,
            descricao,
            especie_id
        })
        return this.plantaRepository.update(planta)
    }
}
