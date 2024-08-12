import { Tercero, TerceroApiResult, TerceroCreateDTO, TerceroUpdateDTO } from "../../../../domain/administracion/terceros/entities/tercero";
import { TerceroTipo } from "../../../../domain/administracion/terceros/entities/tercero_tipo";
import { TerceroRepository as TercerosRepo } from "../../../../domain/administracion/terceros/repositories/terceroRepository";
import { TercerosApi } from "../api/TercerosApi";
export class TerceroRepository implements TercerosRepo {
    private api: TercerosApi;
    constructor() {
        this.api = new TercerosApi();
    }
    async getTercero(codigo: number): Promise<TerceroApiResult> {
        return this.api.getTercero(codigo);
    }
    async getTerceros(elementosPorPagina?: number, search?: string, currentPage?: number): Promise<Tercero[]> {
        return this.api.getTerceros(elementosPorPagina, search, currentPage);
    }
    async createTercero(tercero: TerceroCreateDTO): Promise<Tercero> {
        return this.api.saveTercero(tercero);
    }
    async updateTercero(tercero: TerceroUpdateDTO): Promise<Tercero> {
        return this.api.modifyTercero(tercero);
    }
    async getTerceroTipos(): Promise<TerceroTipo[]> {
        return this.api.getTercerosTipos();
    }
}