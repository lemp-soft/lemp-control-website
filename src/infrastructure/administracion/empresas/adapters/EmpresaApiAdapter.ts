import { EmpresaApiResult, Empresa } from "@domain/administracion/empresas/entities/empresa";
export class EmpresaApiAdapter {
    public static ApiToEntity(empresaApiResult: EmpresaApiResult): Empresa {
        return empresaApiResult
    }
    public static ApiToEntityList(empresaApiResult: EmpresaApiResult[]): Empresa[] {
        return empresaApiResult.map(empresa => this.ApiToEntity(empresa))
    }
}