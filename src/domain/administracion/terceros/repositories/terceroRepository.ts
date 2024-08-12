import { Tercero, TerceroApiResult, TerceroCreateDTO, TerceroUpdateDTO } from "../entities/tercero";
import { TerceroTipo } from "../entities/tercero_tipo";
export interface GetTercero {
    getTercero(codigo: number): Promise<TerceroApiResult>;
}
export interface GetTerceros {
    getTerceros(): Promise<Tercero[]>;
}
export interface CreateTercero {
    createTercero(tercero: TerceroCreateDTO): Promise<Tercero>;
}
export interface UpdateTercero {
    updateTercero(tercero: TerceroUpdateDTO): Promise<Tercero>;
}
export interface getTerceroTipos {
    getTerceroTipos(): Promise<TerceroTipo[]>;
}
export abstract class TerceroRepository {
    public abstract getTercero(codigo: number): Promise<TerceroApiResult>;
    public abstract getTerceros(): Promise<Tercero[]>;
    public abstract createTercero(tercero: TerceroCreateDTO): Promise<Tercero>;
    public abstract updateTercero(tercero: TerceroUpdateDTO): Promise<Tercero>;
    public abstract getTerceroTipos(): Promise<TerceroTipo[]>;
}