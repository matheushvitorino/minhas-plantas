import { EspecieRepositoryInMemory } from "../repositories/especieRepositoryInMemory"
import { CreateEspecieUseCase } from "./createEspecieUseCase"

let especieRepositoryInMemory: EspecieRepositoryInMemory;
let createEspecieUseCase: CreateEspecieUseCase;
describe('Create Especie', ()=>{
    beforeEach(()=>{
        especieRepositoryInMemory = new EspecieRepositoryInMemory();
        createEspecieUseCase = new CreateEspecieUseCase(especieRepositoryInMemory);
    })
    it('Especie foi criada', async()=>{
    expect(especieRepositoryInMemory.especies).toEqual([])

    const especie_nova = await createEspecieUseCase.execute(
        {
            nome: 'Plantaexemplo',
            descricao:'exexexex'
        }                 
    )
    expect(especieRepositoryInMemory.especies).toEqual([especie_nova])
})
    it('Não permitir criar especies com nome vazio', async()=>{
    expect(especieRepositoryInMemory.especies).toEqual([])

     await expect( createEspecieUseCase.execute(
        {
            nome: '',
            descricao:'exexexex'
        }                 
    )).rejects.toThrow("Nome é obrigatório!");
    
})
})