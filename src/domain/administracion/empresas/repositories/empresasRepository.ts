import { Empresa } from "../entities/empresa";
export interface GetEmpresasPorNitDeTercero {
    getEmpresaPorNitDeTercero(nit: number): Promise<Empresa[]>;
}