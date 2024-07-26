interface fechedTerceros {
    data: Terceros[]
    message?: string
    status: string
    pagina?: string
    siguiente?: number
    anterior?: number
    max_pages?: number
}
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Terceros, TerceroUpdate } from "../types/terceros"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Empresa } from "../types/empresa"
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
interface FechedTercero {
    data: Terceros
    message?: string
    status: string
}
interface fechedEmpresa {
    data: Empresa[]
    message?: string
    status: string
}
export function useTercero(nit: string) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['tercero', nit],
        queryFn: async () => {
            const response = await fetch('http://127.0.0.1:8000/api/v1/terceros/' + nit, {
                headers: {
                    Authorization: localStorage.getItem('token') ?? ''
                }
            })
            return response.json() as Promise<FechedTercero>
        }
    })
    const { data: dataEmpresa, isLoading: LoadingEmpresa, isError: ErrorEmpresa } = useQuery({
        queryKey: ['tercero', 'empresa', nit],
        queryFn: async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/terceros/${nit}/empresas`, {
                headers: {
                    Authorization: localStorage.getItem('token') ?? ''
                }
            })
            return response.json() as Promise<fechedEmpresa>
        }
    })
    const empresa = {
        dataEmpresa: dataEmpresa?.data,
        LoadingEmpresa,
        ErrorEmpresa
    }
    const tercero = {
        data: data?.data,
        isLoading,
        isError
    }

    return { tercero, empresa }
}
export function useCrearTercero() {
    // crear una empresa
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { mutate: crearTercero, isPending, error: Error } = useMutation({
        mutationKey: ['createEmpresa'],
        mutationFn: async (empresa: Terceros) => {
            const fetchEmpresa = await fetch('http://127.0.0.1:8000/api/v1/terceros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('token') ?? ''
                },
                body: JSON.stringify(empresa)
            })
            return await fetchEmpresa.json()
        },
        onSuccess: () => {
            // actualizar la cachede las Terceros
            // Invalidar y refetch de la consulta de terceros
            queryClient.invalidateQueries({
                queryKey: ['terceros']
            });
            queryClient.invalidateQueries({
                queryKey: ['terceros', 1, 10]
            });
            // Redirigir a la página de terceros
            navigate('/administracion/terceros');

        },
        onError: (error: any) => {
            console.log(error)
        }
    })
    return { crearTercero, isPending, Error }
}
export function useEditarTercero(nit: string) {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { mutate: editarTercero, isPending, error: Error } = useMutation({
        mutationKey: ['editarTercero', nit],
        mutationFn: async (tercero: TerceroUpdate) => {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/terceros/${nit}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('token') ?? ''
                },
                body: JSON.stringify(tercero)
            })
            return response.json() as Promise<FechedTercero>
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tercero', nit]
                })
            navigate(`/administracion/terceros/${nit}`)
        }
    })
    return { editarTercero, isPending, Error }
}