import { Adubacao } from "../entites/Adubacao";
import { AdubacaoRepositoryInMemory } from "../repositories/adubacaoRepositoryInMemory";
import { CreateAdubacaoUseCase } from "./createAdubacaoUseCase"

let createAdubacaoUseCase : CreateAdubacaoUseCase;
let adubacaoRepositoryInMemory : AdubacaoRepositoryInMemory;
describe('Create Adubacao',()=>{
    beforeEach(()=>{
            adubacaoRepositoryInMemory = new AdubacaoRepositoryInMemory();
            createAdubacaoUseCase=  new CreateAdubacaoUseCase(adubacaoRepositoryInMemory);
          });
          it('Criar uma adubacao', async () => {
            expect(adubacaoRepositoryInMemory.adubacoes).toEqual([]);

            await createAdubacaoUseCase.execute({
                adubo: 'adubo1',
                planta_id: '1'
            });

            expect(adubacaoRepositoryInMemory.adubacoes.length).toBe(1);
            expect(adubacaoRepositoryInMemory.adubacoes[0].adubo).toBe('adubo1');
            expect(adubacaoRepositoryInMemory.adubacoes[0].planta_id).toBe('1');
          });
});