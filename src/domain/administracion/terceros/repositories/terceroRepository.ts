import { Tercero, TerceroApiResult, TerceroCreateDTO, TerceroUpdateDTO } from "../entities/tercero";
export interface GetTercero {
    getTercero(codigo: number): Promise<Tercero>;
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