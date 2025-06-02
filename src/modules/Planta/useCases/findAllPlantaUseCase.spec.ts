import { Planta } from "../entities/Planta";
import { PlantaRepositoryInMemory } from "../repositories/PlantaRepositoryInMemory";
import { CreatePlantaUseCase } from "./createPlantaUseCase";
import { FindAllPlantaUseCase } from "./findAllPlantaUseCase";

let findAllPlantaUseCase : FindAllPlantaUseCase
let plantaRepositoryInMemory : PlantaRepositoryInMemory
let cratePlantaUseCase: CreatePlantaUseCase

describe('Teste Listar Plantas',()=>{
    beforeEach(()=>{

        plantaRepositoryInMemory = new PlantaRepositoryInMemory()
        cratePlantaUseCase = new CreatePlantaUseCase(plantaRepositoryInMemory)
        findAllPlantaUseCase =  new FindAllPlantaUseCase(plantaRepositoryInMemory)
        plantaRepositoryInMemory.plantas = [
            new Planta({nome:'planta1',descricao:'blabla',especie_id:'1'}),
            new Planta({nome:'planta2',descricao:'blabla',especie_id:'2'}),
            new Planta({nome:'planta3',descricao:'blabla',especie_id:'3'}),
            new Planta({nome:'planta4',descricao:'blabla',especie_id:'4'}),
        ]
    });
    it('Verificar se existe uma lista', async()=>{
        const lista = await findAllPlantaUseCase.execute();

        expect(lista).toHaveLength(4);
        expect(lista).toEqual(plantaRepositoryInMemory.plantas);

        })
    });