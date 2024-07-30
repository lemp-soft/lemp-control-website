import { Tercero } from "../../../../domain/administracion/terceros/entities/tercero"
import { CheckTable } from "../../../../shared/types/check_table"
import PaginationMainTable, { PropsPaginationMainTable } from "../Paginations/PaginationMainTable"
interface MainTableWithDataProps<T> {
    pagination: PropsPaginationMainTable
    data: T[]
    columns: CheckTable[]
}
export function MainTableWithData<T extends Tercero>({ pagination, data, columns }: MainTableWithDataProps<T>) {
    return <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {
                            // no se muestra la columna si esta desactivada
                            columns.map((column, index) => column.active && <th key={index} className="px-6 py-3 text-xs font-semibold tracking-wider">{column.name}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        // mostrar tos los datos da la data
                        data.map((row, index) => (
                            <tr key={index} className="bg-white dark:bg-gray-800">
                                {
                                    columns.map((column, index) => column.active && <td key={index} className="px-6 py-4 whitespace-nowrap">{row[column.name]}</td>)
                                }
                            </tr>
                        ))
                    }
                    {
                        data.length !== 10 && Array.from({ length: 10 - data.length + 1 }, (_, i) => i).map((_, index) => (
                            <tr key={index} className="bg-white dark:bg-gray-800">
                                {
                                    Object.keys(data[0]).map((column, index) => <td key={index} className="px-6 py-6 whitespace-nowrap"></td>)
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
}

export default MainTableWithData