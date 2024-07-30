import { Tercero } from '../entities/tercero';
import { GetTercero } from '../repositories/terceroRepository';

export class GetTerceroUseCase {
    constructor(private repository: GetTercero) { }
    async execute(codigo: number): Promise<Tercero> {
        return this.repository.getTercero(codigo);
    }
}