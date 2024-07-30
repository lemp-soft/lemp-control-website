import { Tercero } from "../entities/tercero";
import { CreateTercero } from "../repositories/terceroRepository";
import { TerceroCreateDTO } from "../entities/tercero";
export class CreateTerceroUseCase {
    constructor(private repository: CreateTercero) { }
    async execute(tercero: TerceroCreateDTO): Promise<Tercero> {
        return this.repository.createTercero(tercero);
    }
}