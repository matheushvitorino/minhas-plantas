import { Adubacao } from '../../Adubacao/entites/Adubacao';
import { Planta } from '../entities/Planta';

export abstract class PlantaRepository{
    abstract create(planta: Planta): Promise<void>;
    abstract findById(id: string): Promise<Planta | null>;
    abstract findByName(nome:string): Promise<Planta | null>;
    abstract findAll(): Promise<Planta[]>;
    abstract delete(id: string): Promise<void>;
    abstract update(id:string,planta: Planta): Promise<void>;

}