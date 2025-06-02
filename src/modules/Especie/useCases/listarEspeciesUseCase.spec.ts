import { Especie } from "../entities/Especie";
import { EspecieRepositoryInMemory } from "../repositories/especieRepositoryInMemory";
import { CreateEspecieUseCase } from "./createEspecieUseCase";
import { ListarEspecieUseCase } from "./listarEspeciesUseCase";

let especieRepositoryInMemory: EspecieRepositoryInMemory;
let createEspecieUseCase: CreateEspecieUseCase;
let listarEspecieUseCase: ListarEspecieUseCase;
describe('Teste Listar Especies',()=>{
    beforeEach(()=>{

        especieRepositoryInMemory = new EspecieRepositoryInMemory()
        createEspecieUseCase = new CreateEspecieUseCase(especieRepositoryInMemory)
        listarEspecieUseCase =  new ListarEspecieUseCase(especieRepositoryInMemory)
        especieRepositoryInMemory.especies = [
            new Especie({nome:'planta1',descricao:'blabla'}),
            new Especie({nome:'planta2',descricao:'blabla'}),
            new Especie({nome:'planta3',descricao:'blabla'}),
            new Especie({nome:'planta4',descricao:'blabla'}),
        ]
    });
    it('Verificar se existe uma lista', async()=>{
        const lista = await listarEspecieUseCase.findAll();

        expect(lista).toHaveLength(4);
        expect(lista).toEqual(especieRepositoryInMemory.especies);

    })
})