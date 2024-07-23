interface fechedTerceros {
    data: Terceros[]
    message: string
    status: string

}
import { useQuery } from "@tanstack/react-query"
import { Terceros } from "../types/terceros"
export function useTerceros() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['terceros'],
        queryFn: async () => {
            const response = await fetch('http://127.0.0.1:8000/api/v1/terceros', {
                headers: {
                    Authorization: localStorage.getItem('token') ?? ''
                }
            })
            return response.json() as Promise<fechedTerceros>
        }
    })
    return { data, isLoading, isError }
}
export function useTercerosPaginados(page: number = 1, elementosPorPagina: number = 7) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['terceros', page],
        queryFn: async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/terceros/paginado?elementos=${elementosPorPagina}&pagina=${page}`, {
                headers: {
                    Authorization: localStorage.getItem('token') ?? ''
                }
            })
            return response.json()
        }
    })
    return { data, isLoading, isError }
}