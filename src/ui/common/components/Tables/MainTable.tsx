import { Tercero } from "../../../../domain/administracion/terceros/entities/tercero"
import { CheckTable } from "../../../../shared/types/check_table"
import { PropsPaginationMainTable } from "../Paginations/PaginationMainTable"
import MainTableError from "./MainTableError"
import MainTableNoData from "./MainTableNoData"
import MainTableSkeleton from "./MainTableSkeleton"
import MainTableWithData from "./MainTableWithData"

export interface MainTableProps<T extends { idTable: string }> {
    data: T[] | undefined
    loading?: boolean
    error?: boolean
    name: string
    haddleEdit: (id: string) => void
    haddeDelete: (id: string) => void
    pagination: PropsPaginationMainTable
    columns: CheckTable[]
}
const MainTable = <T extends { idTable: string }>({ data, error, loading, haddleEdit, haddeDelete, pagination, columns }: MainTableProps<T>) => {
    if (loading) {
        return <MainTableSkeleton />
    }
    if (error) {
        return <MainTableError />
    }
    if (data && data.length) {
        return <MainTableWithData data={data} pagination={pagination} columns={columns} handdleEdit={haddleEdit} haddeDelete={haddeDelete} />
    }
    if (data && !data.length) {
        return <MainTableNoData />
    }
    return <MainTableNoData />
}


export default MainTable