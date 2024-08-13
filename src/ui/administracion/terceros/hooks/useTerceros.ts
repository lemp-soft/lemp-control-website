import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { TerceroRepository } from "../../../../infrastructure/administracion/terceros/repositories/TerceroRepasitory"
interface PropsUseTerceros {
    elementosPorPagina?: number,
}
export function useTerceros({ elementosPorPagina = 5 }: PropsUseTerceros) {
    const terceroRepository = new TerceroRepository()
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState('')
    const { data, isLoading, isError } = useQuery({
        queryKey: search ? ['terceros', currentPage, elementosPorPagina, search] : currentPage ? ['terceros', currentPage, elementosPorPagina] : ['terceros'],
        queryFn: async () => {
            return terceroRepository.getTerceros(elementosPorPagina, search, currentPage)
        }
    })
    return { data, isLoading, isError, setSearch, setCurrentPage }
}