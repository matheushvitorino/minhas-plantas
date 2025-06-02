import { PlantaRepositoryInMemory } from "../repositories/PlantaRepositoryInMemory";
import { CreatePlantaUseCase } from "./createPlantaUseCase";

let createPlantaUseCase : CreatePlantaUseCase;
let plantaRepositoryInMemory: PlantaRepositoryInMemory;
describe('Create Planta', ()=>{
    beforeEach(()=>{
        plantaRepositoryInMemory = new PlantaRepositoryInMemory();
        createPlantaUseCase = new CreatePlantaUseCase(plantaRepositoryInMemory);
    })
    it('Especie foi criada', async()=>{
    expect(plantaRepositoryInMemory.plantas).toEqual([]);

     await createPlantaUseCase.execute(
        {
            nome:'Planta1',
            descricao:'blabla',
            especie_id:'1',

        }             
    );
    expect(plantaRepositoryInMemory.plantas.length).toBe(1);
    expect(plantaRepositoryInMemory.plantas[0].nome).toBe('Planta1');
    expect(plantaRepositoryInMemory.plantas[0].descricao).toBe('blabla');
    expect(plantaRepositoryInMemory.plantas[0].especie_id).toBe('1');
});
});