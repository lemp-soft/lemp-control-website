import { Tercero } from '../entities/tercero';
import { GetTercero } from '../repositories/terceroRepository';

export class GetTerceroUseCase {
    constructor(private repository: GetTercero) {}
    async execute(id: number): Promise<Tercero> {
        return this.repository.getTercero(id);
    }
}