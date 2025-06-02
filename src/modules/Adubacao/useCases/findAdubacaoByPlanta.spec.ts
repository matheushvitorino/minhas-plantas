import { Adubacao } from "../entites/Adubacao";
import { AdubacaoRepositoryInMemory } from "../repositories/adubacaoRepositoryInMemory"
import { FindAdubacoesByPlantaId } from "./findAdubacaoByPlantaId"

let findAdubacoesByPlantaId: FindAdubacoesByPlantaId;
let adubacaoRepositoryInMemory: AdubacaoRepositoryInMemory;
describe('teste adubçoes por planta',()=>{
    beforeEach(()=>{
        adubacaoRepositoryInMemory= new AdubacaoRepositoryInMemory();
        findAdubacoesByPlantaId= new FindAdubacoesByPlantaId(adubacaoRepositoryInMemory);
    })
    it('há mais de uma adubacao por planta',()=>{
        adubacaoRepositoryInMemory.adubacoes=[
            new Adubacao({adubo:'adubo1', planta_id:'1'}),
            new Adubacao({adubo:'adubo2', planta_id:'1'}),
            new Adubacao({adubo:'adubo3', planta_id:'1'}),
        ]
        expect(adubacaoRepositoryInMemory.adubacoes).toHaveLength(3)

        adubacaoRepositoryInMemory.adubacoes.forEach(adubo =>{
            expect(adubo.planta_id).toBe('1')

        })

    })
})