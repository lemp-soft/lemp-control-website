import { MainTableProps } from "./MainTable"
import { useCheckboxTable } from "../../hooks/useCheckboxTable"
import PaginationMainTable from "../Pagination/PaginationMainTable"
function MainTableWithData<T extends object>({ data, pagination, name, haddleEdit }: MainTableProps<T>) {
    if (typeof data === 'undefined') {
        return <div>aqui nunca dentra</div>
    }
    const { column } = useCheckboxTable(name)
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {
                                // no se muestra la columna si esta desactivada
                                column.map((column, index) => column.active && <th key={index} className="font-semibold p-2">{column.name}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // no se muestra la columna si esta desactivada
                            data.map((row, index) => (
                                <tr key={index} className="bg-white dark:bg-gray-800">
                                    {
                                        column.map((column, index) => column.active && <td onClick={()=>{
                                            if(name === 'terceros'){
                                                haddleEdit(String(row.nit))
                                            }
                                        }} key={index} className="px-6 py-4 whitespace-nowrap cursor-pointer">{String(row[column.name as keyof typeof row])}</td>)
                                    }
                                </tr>
                            ))
                        }
                        {
                            data.length !== 10 && Array.from({ length: 10 - data.length + 1 }, (_, i) => i).map((_, index) => (
                                <tr key={index} className="bg-white dark:bg-gray-800">
                                    {
                                        column.map((column, index) => column.active && <td key={index} className="px-6 py-6 whitespace-nowrap"></td>)
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
                pagination && <PaginationMainTable actual_page={pagination.actual_page as number} max_pages={pagination.max_pages as number} haddlePage={pagination.haddlePage as (page: number) => void} />
            }
        </>
    )
}
export default MainTableWithData