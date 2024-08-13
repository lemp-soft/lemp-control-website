import { useEffect } from "react"
import { useTerceros } from "../hooks/useTerceros"
import { PropsPaginationMainTable } from "../../../common/components/Paginations/PaginationMainTable"
import { useNavigate } from "react-router-dom"
import { useCheckboxTable } from "../../../../shared/state/checkTableStore"
import { useDeleteTercero } from "./useDelteTercero"
export function useTercerosPage() {
    // traer los datos de la api
    const navigate = useNavigate()
    const { data, isError, isLoading, setCurrentPage, setSearch } = useTerceros({
        elementosPorPagina: 10
    })

    const { columns, setColumnsStore, compare } = useCheckboxTable("terceros")
    const { EliminarTercero, Loadding: DeleteTerceroLoading, error: DeleteTerceroError } = useDeleteTercero()
    const handdleEdit = (id: string) => {
        navigate(`/administracion/terceros/${id}/editar`)
    }
    const handdleClickOnRow = (id: string) => {
        navigate(`/administracion/terceros/${id}`)
    }
    const haddlePage = (page: number) => {
        setCurrentPage(page)
    }
    const haddleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const handdleDeleteTercero = (nit: string) => {
        if (globalThis.confirm('¿Estas seguro de eliminar el tercero?')) {
            EliminarTercero(Number(nit))
        }
    }
    const pagination: PropsPaginationMainTable = {
        max_pages: 1,
        actual_page: 1,
        haddlePage
    }
    useEffect(() => {
        if (data) {
            const columnsObject = Object.keys(data[0] as object).map((name) => ({ name, active: true }))
            compare(columnsObject)
        }
    }, [data])
    return {
        data,
        isError,
        isLoading,
        handdleEdit,
        haddleSearch,
        handdleDeleteTercero,
        handdleClickOnRow,
        pagination,
        columns,
        setColumnsStore,
        DeleteTerceroLoading,
        DeleteTerceroError
    }
}