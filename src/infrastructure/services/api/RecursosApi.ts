import { MunicipioApi } from "../../../shared/types/municipio";
interface FetchGetMunicipiosResult {
    data: MunicipioApi[]
    message: string
    status: string
}
export class RecursosApi {
    async getMunicipios(search?: string, max?: number): Promise<FetchGetMunicipiosResult> {
        const urlSearch = search ? `?search=${search}` : ''
        const urlMax = max ? `&max=${max}` : ''
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/recursos/municipios' + urlSearch + urlMax)
            return await response.json() as FetchGetMunicipiosResult
        } catch (error) {
            throw new Error('Error al obtener los municipios')
        }
    }
}