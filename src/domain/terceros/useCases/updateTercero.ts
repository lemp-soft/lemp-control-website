import { Tercero } from "../entities/tercero";
import { UpdateTercero } from "../repositories/terceroRepository";
import { TerceroUpdateDTO } from "../entities/tercero";
export class UpdateTerceroUseCase {
    constructor(private repository: UpdateTercero) { }
    async execute(tercero: TerceroUpdateDTO): Promise<Tercero> {
        return this.repository.updateTercero(tercero);
    }
}