import { Adubacao } from "../entites/Adubacao";
import { AdubacaoRepositoryInMemory } from "../repositories/adubacaoRepositoryInMemory";
import { FindAllAdubacaoUseCase } from "./findAllAdubacaoUseCase";

let findAllAdubacaoUseCase : FindAllAdubacaoUseCase;
let adubacaoRepositoryInMemory : AdubacaoRepositoryInMemory;
describe('Teste Find All Adubacao',()=>{

    beforeEach(()=>{
        adubacaoRepositoryInMemory = new AdubacaoRepositoryInMemory();
        findAllAdubacaoUseCase = new FindAllAdubacaoUseCase(adubacaoRepositoryInMemory); 
        
        adubacaoRepositoryInMemory.adubacoes= [
                new Adubacao({adubo: 'adubo1',planta_id: '1'}),
                new Adubacao({adubo: 'adubo2',planta_id: '2'}),
                new Adubacao({adubo: 'adubo3',planta_id: '3'}),
                new Adubacao({adubo: 'adubo4',planta_id: '4'}),
                ];
    });
    it('Verificar se existe uma lista', async()=>{
        const lista = await findAllAdubacaoUseCase.execute();
        expect(lista).toHaveLength(4);
        expect(lista).toEqual(adubacaoRepositoryInMemory.adubacoes);
    })

})