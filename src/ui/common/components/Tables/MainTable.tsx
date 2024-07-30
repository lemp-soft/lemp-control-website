import { Tercero } from "../../../../domain/administracion/terceros/entities/tercero"
import { PropsPaginationMainTable } from "../Paginations/PaginationMainTable"
import MainTableError from "./MainTableError"
import MainTableNoData from "./MainTableNoData"
import MainTableSkeleton from "./MainTableSkeleton"
import MainTableWithData from "./MainTableWithData"

export interface MainTableProps<T> {
    data: T[] | undefined
    loading?: boolean
    error?: boolean
    name: string
    haddleEdit: (id: string) => void
    pagination: PropsPaginationMainTable
}
const MainTable = <T extends Tercero>({ data, error, loading, name, haddleEdit, pagination }: MainTableProps<T>) => {
    const { actual_page, haddlePage, max_pages } = pagination
    if (loading) {
        return <MainTableSkeleton />
    }
    if (error) {
        return <MainTableError />
    }
    if (data && data.length) {
        return <MainTableWithData data={data} actual_page={actual_page} haddlePage={haddlePage} max_pages={max_pages} pagination={pagination}/>
    }
    if (data && !data.length) {
        return <MainTableNoData />
    }
    return <MainTableNoData />
}


export default MainTable