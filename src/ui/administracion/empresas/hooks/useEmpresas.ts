import { EmpresaRepository } from "@infra/administracion/empresas/repositories/EmpresaRepository"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
interface PropsUseEmpresas {
    elementosPorPagina?: number,
}
export function useEmpresas({ elementosPorPagina = 10 }: PropsUseEmpresas) {
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState('')
    const empresasReposity = new EmpresaRepository()
    const { data: DataEmpresas, isLoading: LoadingEmpresas, isError: ErrorEmpresas } = useQuery({
        queryKey: ['empresas', currentPage, elementosPorPagina, search],
        queryFn: async () => {
            return empresasReposity.getEmpresas(search, currentPage, elementosPorPagina)
        }
    })
    return { DataEmpresas, LoadingEmpresas, ErrorEmpresas, setSearch, setCurrentPage }
}