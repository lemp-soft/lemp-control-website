import MainTableSkeleton from "./MainTableSkeleton"
import MainTableError from "./MainTableError"
import MainTableNoData from "./MainTableNoData"
import MainTableWithData from "./MainTableWithData"
interface PaginationProps {
    max_pages?: number
    actual_page?: number
    haddlePage?: (page: number) => void
}
export interface MainTableProps<T> {
    data: T[] | undefined
    loading?: boolean
    error?: boolean
    pagination?: PaginationProps
    name: string
    haddleEdit: (id: string) => void
}
const MainTable = <T extends object>({ data = [], error, loading, pagination, name, haddleEdit }: MainTableProps<T>) => {
    if (loading) {
        return <MainTableSkeleton />
    }
    if (error) {
        return <MainTableError />
    }
    if (data.length) {
        return <MainTableWithData data={data} pagination={pagination} name={name} haddleEdit={haddleEdit} />
    }
    return <MainTableNoData />
}



export default MainTable