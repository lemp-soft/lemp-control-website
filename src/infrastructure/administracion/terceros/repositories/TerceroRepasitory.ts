import { Tercero, TerceroCreateDTO, TerceroUpdateDTO } from "../../../../domain/administracion/terceros/entities/tercero";
import { TerceroTipo } from "../../../../domain/administracion/terceros/entities/tercero_tipo";
import { TerceroRepository as TercerosRepo } from "../../../../domain/administracion/terceros/repositories/terceroRepository";
import { TercerosApi } from "../api/TercerosApi";
import { TerceroApiAdapter } from "../adapters/TerceroApiadapter";
export class TerceroRepository implements TercerosRepo {
    private api: TercerosApi;
    constructor() {
        this.api = new TercerosApi();
    }
    async getTercero(codigo: number): Promise<Tercero> {
        const tercero = await this.api.getTercero(codigo);
        return TerceroApiAdapter.ApiToEntity(tercero);
    }
    async getTerceros(elementosPorPagina?: number, search?: string, currentPage?: number): Promise<Tercero[]> {
        return this.api.getTerceros(elementosPorPagina, search, currentPage);
    }
    async createTercero(tercero: TerceroCreateDTO): Promise<Tercero> {
        return this.api.saveTercero(tercero);
    }
    async updateTercero(tercero: TerceroUpdateDTO, nit: number): Promise<boolean> {
        const terceroUpdated = await this.api.modifyTercero(tercero, nit);
        return terceroUpdated;
    }
    async getTerceroTipos(): Promise<TerceroTipo[]> {
        return this.api.getTercerosTipos();
    }
    public deleteTercero(codigo: number): Promise<void> {
        return this.api.deleteTercero(codigo);
    }
}