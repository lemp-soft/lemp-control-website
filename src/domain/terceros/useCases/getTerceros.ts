import { Tercero } from "../entities/tercero";
import { GetTerceros } from "../repositories/terceroRepository";
export class GetTercerosUseCase {
    constructor(private repository: GetTerceros) { }
    async execute(): Promise<Tercero[]> {
        return this.repository.getTerceros();
    }
}