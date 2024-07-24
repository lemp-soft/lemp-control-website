interface fechedTerceros {
    data: Terceros[]
    message: string
    status: string
    pagina?: string
    siguiente?: number
    anterior?: number
    max_pages?: number
}
import { useQuery } from "@tanstack/react-query"
import { Terceros } from "../types/terceros"
import { useState } from "react"
interface PropsUseTerceros {
    elementosPorPagina?: number,
    search?: string
}
export function useTerceros({
    elementosPorPagina
}: PropsUseTerceros) {
    useState
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState('')
    let urlPage = currentPage ? `?pagina=${currentPage}` : ''
    let urlElementosPorPagina = elementosPorPagina ? `&elementos=${elementosPorPagina}` : ''
    let urlSearch = search ? `&search=${search}` : ''
    const { data, isLoading, isError } = useQuery({
        queryKey: search ? ['terceros', currentPage, elementosPorPagina, search] : currentPage ? ['terceros', currentPage, elementosPorPagina] : ['terceros'],
        queryFn: async () => {
            const response = await fetch('http://127.0.0.1:8000/api/v1/terceros' + urlPage + urlElementosPorPagina + urlSearch, {
                headers: {
                    Authorization: localStorage.getItem('token') ?? ''
                }
            })
            return response.json() as Promise<fechedTerceros>
        }
    })
    return { data, isLoading, isError, setSearch, setCurrentPage }
}
interface fechedTercerosPaginados {
    data: Terceros[]
    message: string
    status: string
    pagina: string
    siguiente: number
    anterior: number
    max_pages: number
}
export function useTercerosPaginados(page: number = 1, elementosPorPagina: number = 7) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['terceros', page, elementosPorPagina],
        queryFn: async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/terceros/paginado?elementos=${elementosPorPagina}&pagina=${page}`, {
                headers: {
                    Authorization: localStorage.getItem('token') ?? ''
                }
            })
            return response.json() as Promise<fechedTercerosPaginados>
        }
    })
    return { data, isLoading, isError }
}