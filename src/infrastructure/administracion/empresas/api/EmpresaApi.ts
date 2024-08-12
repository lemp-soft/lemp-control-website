import { Empresa } from "../../../../domain/administracion/empresas/entities/empresa"; 
interface getEmpresaPorNitDeTerceroResponse {
    data: Empresa[];
    status: string;
    message: string;
}
export class EmpresaApi {
    async getEmpresaPorNitDeTercero(nit: number): Promise<Empresa[]> {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/terceros/${nit}/empresas`,{
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
}