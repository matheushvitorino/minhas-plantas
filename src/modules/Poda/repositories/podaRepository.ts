import { Poda } from "../entities/Poda";

export abstract class PodaRepository{
    abstract create(poda: Poda):Promise<void>;
}