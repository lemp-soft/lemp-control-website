import { Empresa, EmpresaApiResult, EmpresaCreateDTO, EmpresaUpdateDTO } from "../../../../domain/administracion/empresas/entities/empresa";
interface getEmpresaPorNitDeTerceroResponse {
    data: Empresa[];
    status: string;
    message: string;
}
interface getEmpresas {
    data: EmpresaApiResult[];
    status: string;
    message: string;
}
interface getEmpresa {
    data: EmpresaApiResult;
    status: string;
    message: string;
}
interface postEmpresa {
    data: EmpresaApiResult;
    status: string;
    message: string;
}
interface putEmpresa {
    data: true;
    status: string;
    message: string;
}
export class EmpresaApi {
    async getEmpresaPorNitDeTercero(nit: number): Promise<Empresa[]> {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/terceros/${nit}/empresas`, {
                method: 'GET',
                headers: {
                    Authorization: localStorage.getItem('token') ?? ''
                }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json() as getEmpresaPorNitDeTerceroResponse
            return data.data;

        } catch (error) {
            throw new Error('Error al obtener las empresas')
        }
    }
    async getEmpresas(search?: string, pagina?: number, max?: number): Promise<EmpresaApiResult[]> {
        max = max ?? 8
        pagina = pagina ?? 1
        const queryPagina = `?pagina=${pagina}`
        const queryMax = max ? `&max=${max}` : ''
        const querySearch = search ? `&search=${search}` : ''
        try {
            const response = await fetch(`http://127.0.0.1:800/api/v1/empresas${queryPagina}${queryMax}${querySearch}`, {
                headers: {
                    AuthUsuarioControl: localStorage.getItem('token') ?? ''
                }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json() as getEmpresas
            return data.data
        } catch (error) {
            throw new Error("Error al obtener las empresas");

        }
    }
    async getEmpresa(codigo: number): Promise<Empresa> {
        try {
            const response = await fetch(`http://127.0.0.1:800/api/v1/empresas/${codigo}`, {
                headers: {
                    AuthUsuarioControl: localStorage.getItem('token') ?? ''
                }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json() as getEmpresa
            return data.data
        } catch (error) {
            throw new Error("Error al obtener la empresa");
        }
    }
    async postEmpresa(empresa: EmpresaCreateDTO): Promise<Empresa> {
        try {
            const response = await fetch(`http://127.0.0.1:800/api/v1/empresas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    AdminAuthControl: localStorage.getItem('token') ?? ''
                },
                body: JSON.stringify(empresa)
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json() as postEmpresa
            return data.data
        } catch (error) {
            throw new Error("Error al crear la empresa");
        }
    }
    async putEmpresa(empresa: EmpresaUpdateDTO, codigo: number): Promise<boolean> {
        try {
            const response = await fetch(`http://127.0.0.1:800/api/v1/empresas/${codigo}`,{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    AdminAuthControl: localStorage.getItem('token') ?? ''
                },
                body: JSON.stringify(empresa)
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json() as putEmpresa
            return data.data
        } catch (error) {
            throw new Error("Error al modificar la empresa");
        }
        }
    async deleteEmpresa(codigo: number): Promise<void> {
        try {
            const response = await fetch(`http://127.0.0.1:800/api/v1/empresas/${codigo}`,{
                method: 'DELETE',
                headers:{
                    AdminAuthControl: localStorage.getItem('token') ?? ''
                }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
        } catch (error) {
            throw new Error("Error al eliminar la empresa");
            
        }
    }
}