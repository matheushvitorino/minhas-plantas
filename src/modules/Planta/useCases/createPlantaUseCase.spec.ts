import { PlantaRepositoryInMemory } from "../repositories/PlantaRepositoryInMemory";
import { CreatePlantaUseCase } from "./createPlantaUseCase";

let createPlantaUseCase : CreatePlantaUseCase
let plantaRepositoryInMemory: PlantaRepositoryInMemory
describe('Create Planta', ()=>{
    beforeEach(()=>{
        plantaRepositoryInMemory = new PlantaRepositoryInMemory();
        createPlantaUseCase = new CreatePlantaUseCase(plantaRepositoryInMemory);
    })
    it('Especie foi criada', async()=>{
    expect(plantaRepositoryInMemory.plantas).toEqual([])

    const planta_nova = await createPlantaUseCase.execute(
        {
            nome:'Planta1',
            descricao:'blabla',
            especie_id:'1',

        }             
    )
    expect(plantaRepositoryInMemory.plantas).toEqual([planta_nova])
})
})