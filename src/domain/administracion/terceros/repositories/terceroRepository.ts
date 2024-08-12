import { Tercero, TerceroCreateDTO, TerceroUpdateDTO } from "../entities/tercero";
import { TerceroTipo } from "../entities/tercero_tipo";

export abstract class TerceroRepository {
    public abstract getTercero(codigo: number): Promise<Tercero>;
    public abstract getTerceros(): Promise<Tercero[]>;
    public abstract createTercero(tercero: TerceroCreateDTO): Promise<Tercero>;
    public abstract updateTercero(tercero: TerceroUpdateDTO): Promise<Tercero>;
    public abstract getTerceroTipos(): Promise<TerceroTipo[]>;
}