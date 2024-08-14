import { Empresa, EmpresaCreateDTO, EmpresaUpdateDTO } from "../entities/empresa";
export abstract class EmpresasRepository {
    public abstract getEmpresas(search?: string, pagina?: number, max?: number): Promise<Empresa[]>;
    public abstract getEmpresa(codigo: number): Promise<Empresa>;
    public abstract createEmpresa(empresa: EmpresaCreateDTO): Promise<Empresa>;
    public abstract updateEmpresa(empresa: EmpresaUpdateDTO, codigo: number): Promise<boolean>;
    public abstract deleteEmpresa(codigo: number): Promise<void>;
}