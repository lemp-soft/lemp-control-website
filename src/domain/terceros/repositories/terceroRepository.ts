import { Tercero } from "../entities/tercero";
export interface GetTercero {
    getTercero(id: number): Promise<Tercero>;
}