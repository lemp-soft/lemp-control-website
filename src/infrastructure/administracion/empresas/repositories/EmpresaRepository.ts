import { Empresa, EmpresaCreateDTO, EmpresaUpdateDTO } from "@domain/administracion/empresas/entities/empresa";
import { EmpresasRepository as Repository } from "@domain/administracion/empresas/repositories/empresasRepository";
import { EmpresaApi } from "../api/EmpresaApi";
import { EmpresaApiAdapter } from "../adapters/EmpresaApiAdapter";
export class EmpresaRepository implements Repository {
    private apiEmpresa: EmpresaApi;

    constructor() {
        this.apiEmpresa = new EmpresaApi();
    }

    public async getEmpresas(search?: string, pagina?: number, max?: number): Promise<Empresa[]> {
        const empresas = await this.apiEmpresa.getEmpresas(search, pagina, max);
        return EmpresaApiAdapter.ApiToEntityList(empresas);
    }
    public async getEmpresa(codigo: number): Promise<Empresa> {
        const empresa = await this.apiEmpresa.getEmpresa(codigo);
        return EmpresaApiAdapter.ApiToEntity(empresa);
    }
    public async createEmpresa(empresa: EmpresaCreateDTO): Promise<Empresa> {
        const empresaApiResult = await this.apiEmpresa.postEmpresa(empresa);
        return EmpresaApiAdapter.ApiToEntity(empresaApiResult);
    }
    public async updateEmpresa(empresa: EmpresaUpdateDTO, codigo: number): Promise<boolean> {
        const response = await this.apiEmpresa.putEmpresa(empresa, codigo);
        return response;
    }
    public async deleteEmpresa(codigo: string): Promise<void> {
        await this.apiEmpresa.deleteEmpresa(codigo);
    }
}