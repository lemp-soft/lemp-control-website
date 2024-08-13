import { CheckTable } from "../../../../shared/types/check_table"
import PaginationMainTable, { PropsPaginationMainTable } from "../Paginations/PaginationMainTable"
interface MainTableWithDataProps<T extends Record<string, any>> {
    pagination: PropsPaginationMainTable
    data: T[]
    columns: CheckTable[]
    handdleEdit: (id: string) => void
    haddeDelete: (id: string) => void
    handdleClickOnRow?: (id: string) => void
}
export function MainTableWithData<T extends Record<string, any>>({ pagination, data, columns, haddeDelete, handdleEdit, handdleClickOnRow }: MainTableWithDataProps<T>) {
    return <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full">
                    <tr>
                        {
                            // no se muestra la columna si esta desactivada
                            columns.map((column, index) => column.active && <th key={index} className="px-6 py-3 text-xs font-semibold tracking-wider uppercase">{column.name}</th>)
                        }
                        <th className="px-6 py-3 text-xs font-semibold tracking-wider uppercase">Acciones</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 w-full">
                    {
                        // mostrar tos los datos da la data
                        data.map((row, index) => (
                            <tr key={index} className="bg-white dark:bg-gray-800">
                                {
                                    columns.map((column, index) => column.active && <td key={index} className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400 w-full ${handdleClickOnRow ? 'cursor-pointer' : ''}`} onClick={() => handdleClickOnRow && handdleClickOnRow(row.idTable)} title={`${row[column.name]}`}>{row[column.name]}</td>)
                                }
                                <td>
                                    <div className="flex justify-center items-center gap-2">
                                        <button className="w-6 h-6 bg-red-500 text-white rounded-full hover:bg-red-600" onClick={() => haddeDelete(row.idTable)}>X</button>
                                        <button className="w-6 h-6 bg-green-500 text-white rounded-full hover:bg-green-600" onClick={() => handdleEdit(row.idTable)}>E</button>
                                    </div>
                                </td>
                            </tr>

                        ))
                    }
                    {
                        data.length !== 10 && Array.from({ length: 10 - data.length + 1 }, (_, i) => i).map((_, index) => (
                            <tr key={index} className="bg-white dark:bg-gray-800">
                                {
                                    columns.map((column, index) => column.active && <td key={index} className="px-6 py-6 whitespace-nowrap"></td>)
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