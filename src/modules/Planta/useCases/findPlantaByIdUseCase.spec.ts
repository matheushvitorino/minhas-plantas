import { Planta } from "../entities/Planta";
import { PlantaRepositoryInMemory } from "../repositories/PlantaRepositoryInMemory";
import { FindPlantaByIdUseCase } from "./findPlantaByIdUseCase";

let findPlantaByIdUseCase: FindPlantaByIdUseCase;
let plantaRepositoryInMemory: PlantaRepositoryInMemory;
let n_planta: Planta;

describe('teste buscar planta por id',()=>{
    beforeEach(()=>{
        plantaRepositoryInMemory= new PlantaRepositoryInMemory();
        findPlantaByIdUseCase= new FindPlantaByIdUseCase(plantaRepositoryInMemory);
        n_planta = new Planta({nome:'planta1',descricao:'blabla',especie_id:'1'})
        plantaRepositoryInMemory.plantas.push(n_planta)
    });
    it('busca pelo id',async ()=>{
        const resultado = await findPlantaByIdUseCase.execute({id:n_planta.id});
        if(!resultado){
            throw new Error('Planta não encontrada');
        };
        expect(resultado).toBeDefined(); // verifica se algo foi retornado
        expect(resultado.nome).toBe('planta1'); 
        expect(resultado.especie_id).toBe('1'); 
    });
});