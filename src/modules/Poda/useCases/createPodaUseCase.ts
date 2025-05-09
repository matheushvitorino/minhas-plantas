import { Injectable } from "@nestjs/common";
import { Poda } from "../entities/Poda";
import { PodaRepository } from "../repositories/podaRepository";
interface PodaRequest{
    descricao:string;
}
@Injectable()
export class CreatePodaUseCase{
    constructor(private podaRepository: PodaRepository){}

    async execute({descricao}:PodaRequest){
        return new Poda({descricao});

    }
}