import { Injectable } from "@nestjs/common";
import { RegaRepository } from "../repositories/regaRepository";


@Injectable()
export class CreateRegaUseCase{
    constructor(private regaRepository: RegaRepository){}

    async execute(){
        return await this.regaRepository.create();
    }
}