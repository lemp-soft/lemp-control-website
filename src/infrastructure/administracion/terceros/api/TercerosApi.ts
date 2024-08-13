import { TerceroApiResult, TerceroCreateDTO, TerceroUpdateDTO, Tercero } from "../../../../domain/administracion/terceros/entities/tercero";
import { TerceroTipo } from "../../../../domain/administracion/terceros/entities/tercero_tipo";
import { TerceroApiAdapter } from "../adapters/TerceroApiadapter";
interface GetTercerosFetchResponse {
    data: TerceroApiResult[]
    status: string
    message: string
}
interface GetTerceroFetchResponse {
    data: TerceroApiResult
    status: string
    message: string
}
interface SaveTerceroFetchResponse {
    data: TerceroApiResult
    status: string
    message: string
}
interface UpdateTerceroFetchResponse {
    data: true
    status: string
    message: string
}
interface GetTerceroTiposFetchResponse {
    data: TerceroTipo[]
    status: string
    message: string
}
export class TercerosApi {
    async getTercero(codigo: number): Promise<TerceroApiResult> {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/terceros/${codigo}`, {
                headers: {
                    "AdminAuthControl": localStorage.getItem('token') ?? ''
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
                    AdminAuthControl: localStorage.getItem('token') ?? ''
                }
            })
            const data = await response.json() as GetTercerosFetchResponse
            const dataAdapted = data.data.map(tercero => TerceroApiAdapter.ApiToEntity(tercero))
            return dataAdapted
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
                    AdminAuthControl: localStorage.getItem('token') ?? ''
                },
                body: JSON.stringify(tercero)
            })
            const data = await response.json() as SaveTerceroFetchResponse
            const dataAdapted = TerceroApiAdapter.ApiToEntity(data.data)
            return dataAdapted
        } catch (error) {
            throw new Error('Error al guardar el tercero')
        }
    }
    async modifyTercero(tercero: TerceroUpdateDTO, nit: number): Promise<true> {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/terceros/' + nit, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    AdminAuthControl: localStorage.getItem('token') ?? ''
                },
                body: JSON.stringify(tercero)
            })
            const data = await response.json() as UpdateTerceroFetchResponse
            return data.data
        } catch (error) {
            throw new Error('Error al modificar el tercero')
        }
    }
    async getTercerosTipos(): Promise<TerceroTipo[]> {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/recursos/tipos-de-terceros')
            const data = await response.json() as GetTerceroTiposFetchResponse
            return data.data
        } catch (error) {
            throw new Error('Error al obtener los tipos de terceros')
        }
    }
    async deleteTercero(codigo: number): Promise<void> {
        try {
            await fetch(`http://127.0.0.1:8000/api/v1/terceros/${codigo}`, {
                method: 'DELETE',
                headers: {
                    AdminAuthControl: localStorage.getItem('token') ?? ''
                }
            })
        } catch (error) {
            throw new Error('Error al eliminar el tercero')
        }
    }

}