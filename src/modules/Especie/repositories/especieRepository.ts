import { Especie } from "../entities/Especie";

export abstract class EspecieRepository{
    abstract create(especie: Especie): Promise<void>;
    abstract findAll():Promise<Especie[]>;
}