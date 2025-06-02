import { Especie } from "../entities/Especie";
import { EspecieRepository } from "./especieRepository";

export class EspecieRepositoryInMemory implements EspecieRepository{

    public especies: Especie[]=[]

    async create(especie: Especie): Promise<void> {
        this.especies.push(especie)
    }
    async findAll(): Promise<Especie[]> {
        return this.especies
    }

}