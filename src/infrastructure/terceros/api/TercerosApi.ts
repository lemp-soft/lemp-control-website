import { Tercero, TerceroCreateDTO, TerceroUpdateDTO } from "../../../domain/terceros/entities/tercero";
interface GetTercerosFetchResponse {
    data: Tercero[]
    status: string
    message: string
}
interface GetTerceroFetchResponse {
    data: Tercero
    status: string
    message: string
}
interface SaveTerceroFetchResponse {
    data: Tercero
    status: string
    message: string
}
interface  UpdateTerceroFetchResponse {
    data: Tercero
    status: string
    message: string
}
export class TercerosApi {
    async getTercero(codigo: number): Promise<Tercero> {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/terceros' + codigo, {
                headers: {
                    Authorization: localStorage.getItem('token') ?? ''
                }
            })
            const data = await response.json() as GetTerceroFetchResponse
            return data.data
        } catch (error) {
            throw new Error('Error al obtener el tercero')
        }
    }
    async getTerceros(elementosPorPagina?: number, search?: string, currentPage?: number): Promise<Tercero[]> {
        let urlPage = currentPage ? `?pagina=${currentPage}` : ''
        let urlElementosPorPagina = elementosPorPagina ? `&elementos=${elementosPorPagina}` : ''
        let urlSearch = search ? `&search=${search}` : ''
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/terceros' + urlPage + urlElementosPorPagina + urlSearch, {
                headers: {
                    Authorization: localStorage.getItem('token') ?? ''
                }
            })
            const data = await response.json() as GetTercerosFetchResponse
            return data.data
        } catch (error) {
            throw new Error('Error al obtener los terceros')
        }
    }
    async saveTercero(tercero: TerceroCreateDTO): Promise<Tercero> {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/terceros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('token') ?? ''
                },
                body: JSON.stringify(tercero)
            })
            const data = await response.json() as SaveTerceroFetchResponse
            return data.data
        } catch (error) {
            throw new Error('Error al guardar el tercero')
        }
    }
    async modifyTercero(tercero: TerceroUpdateDTO): Promise<Tercero> {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/terceros', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('token') ?? ''
                },
                body: JSON.stringify(tercero)
            })
            const data = await response.json() as UpdateTerceroFetchResponse
            return data.data
        } catch (error) {
            throw new Error('Error al modificar el tercero')
        }
    }

}