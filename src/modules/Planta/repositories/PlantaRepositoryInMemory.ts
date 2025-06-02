    import { error } from "console";
    import { Planta } from "../entities/Planta";
    import { PlantaRepository } from "./PlantaRepository";

    export class PlantaRepositoryInMemory implements PlantaRepository{
        public plantas: Planta[]=[]

        async create(planta: Planta): Promise<void> {
            this.plantas.push(planta);
        }
        async findById(id: string): Promise<Planta | null> {
            const planta = this.plantas.find(planta => planta.id === id);
            return planta || null;
        }
        async findByName(nome: string): Promise<Planta | null> {
            const planta = this.plantas.find(planta => planta.nome === nome);
            return planta || null;
        }
        async findAll(): Promise<Planta[]> {
            return this.plantas
        }
        async delete(id: string): Promise<void> {
            const planta_id = this.plantas.findIndex(planta => planta.id === id)
            if (planta_id !== -1){
                this.plantas.splice(planta_id, 1);
            }else{
                throw new Error("Não conseguiu localizar o id especificado.")
            }
        }
        async update( planta: Planta): Promise<void> {
            const planta_id = planta.id
                this.plantas[planta_id] = planta
            
        }

    }