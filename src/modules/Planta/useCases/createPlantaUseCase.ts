import { Injectable } from "@nestjs/common";
import { PlantaRepository } from "../repositories/PlantaRepository";
import { Planta } from "../entities/Planta";

interface CreatePlantaRequest{
    nome: string;
    descricao?: string;
    especie_id: string;
}

@Injectable()
export class CreatePlantaUseCase {
    constructor(private plantaRepository: PlantaRepository) {}

    async execute({ nome,  descricao, especie_id}: CreatePlantaRequest) {
        const planta = new Planta({
            nome,
            descricao,
            especie_id
        });

        await this.plantaRepository.create(planta);
        return planta;
    }
}