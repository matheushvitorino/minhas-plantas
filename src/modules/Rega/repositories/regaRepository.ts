import { Rega } from "../entities/Rega";

export abstract class RegaRepository{
    abstract create():Promise<void>;
    abstract update(rega:Rega):Promise<void>;
}