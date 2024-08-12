import { Empresa } from "../../../../domain/administracion/empresas/entities/empresa";
import { GetEmpresasPorNitDeTercero } from "../../../../domain/administracion/empresas/repositories/empresasRepository";
import { EmpresaApi } from "../api/EmpresaApi";
export class EmpresaRepository implements GetEmpresasPorNitDeTercero {
    private api: EmpresaApi;
    constructor() {
        this.api = new EmpresaApi();
    }
    getEmpresaPorNitDeTercero(nit: number): Promise<Empresa[]> {
        return this.api.getEmpresaPorNitDeTercero(nit);
    }
}