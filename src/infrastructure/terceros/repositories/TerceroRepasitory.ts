import { Tercero,TerceroCreateDTO,TerceroUpdateDTO } from "../../../domain/terceros/entities/tercero";
import { GetTercero, GetTerceros, CreateTercero, UpdateTercero } from "../../../domain/terceros/repositories/terceroRepository";
import { TercerosApi } from "../api/TercerosApi";
export class TerceroRepository implements GetTercero, GetTerceros, CreateTercero, UpdateTercero {
    private api: TercerosApi;
    constructor() {
        this.api = new TercerosApi();
    }
    async getTercero(codigo: number): Promise<Tercero> {
        return this.api.getTercero(codigo);
    }
    async getTerceros(): Promise<Tercero[]> {
        return this.api.getTerceros();
    }
    async createTercero(tercero: TerceroCreateDTO): Promise<Tercero> {
        return this.api.saveTercero(tercero);
    }
    async updateTercero(tercero: TerceroUpdateDTO): Promise<Tercero> {
        return this.api.modifyTercero(tercero);
    }
}