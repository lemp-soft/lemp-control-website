import { useEffect, useState } from "react"
import { useCheckboxTable } from "../../hooks/useCheckboxTable"
import PaginationMainTable from "../Pagination/PaginationMainTable"
interface PaginationProps {
    max_pages?: number
    actual_page?: number
    haddlePage?: (page: number) => void
}
interface MainTableProps<T> {
    data: T[] | undefined
    loading?: boolean
    error?: boolean
    pagination?: PaginationProps
    name: string
}
const MainTable = <T extends object>({ data = [], error, loading, pagination, name }: MainTableProps<T>) => {
    if (loading) {
        return <MainTableSkeleton />
    }
    if (error) {
        return <MainTableError />
    }
    if (data.length) {
        return <MainTableWithData data={data} pagination={pagination} name={name} />
    }
    return <MainTableNoData />
}
function MainTableSkeleton() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg animate-pulse">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2"><div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></th>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2"><div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></th>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2"><div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></th>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2"><div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></th>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2"><div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></th>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2"><div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></th>
                    </tr>
                </thead>
                <tbody>
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                </tbody>
            </table>
        </div>
    )
}
// elemento que muestra una lista de checkboxes con las columnas de la tabla si esta activo se muestra la columna si no se oculta
const ColumnSelectorModal = ({ columns, setColumns }
    : { columns: { name: string, active: boolean }[], setColumns: (columns: { name: string, active: boolean }[]) => void }) => {
    const [modal, setModal] = useState(false)

    return (<>
        {/* centrar verticalmente */}
        <div className="flex justify-end items-center mb-6 gap-4">
            <span>Filtrar</span>
            <svg onClick={() => setModal(true)} className="cursor-pointer w-8 aspect-auto text-gray-800 dark:text-white hover:text-lime-800 hover:bg-lime-200 p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
            </svg>
        </div>
        {modal && <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-4 w-2/4">
                <div className="flex justify-between">
                    <h3 className="font-semibold text-2xl">Filtrar</h3>
                    <button onClick={() => setModal(false)} className="text-sm font-semibold">Cerrar</button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {
                        columns.map((column, index) => (
                            <div key={index} className="flex items-center space-x-1">
                                <input type="checkbox" checked={column.active} onChange={() => {
                                    const newColumns = columns.map((col) => {
                                        if (col.name === column.name) {
                                            return { ...col, active: !col.active }
                                        }
                                        return col
                                    })
                                    setColumns(newColumns)
                                }} />
                                <span>{column.name}</span>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>}
    </>)
}

function MainTableWithData<T extends object>({ data, pagination, name }: MainTableProps<T>) {
    if (typeof data === 'undefined') {
        return <div>aqui nunca dentra</div>
    }
    const columnsObject = Object.keys(data[0]).map((name) => ({ name, active: true }))
    //obtener las columnas de la store
    const useColumnStore = useCheckboxTable(name)
    // si la store tiene columnas guardadas se muestran
    const column = useColumnStore(state => state.columns)
    const setColumnsStore = useColumnStore(state => state.setColumns)
    useEffect(() => {
        if (column.length != columnsObject.length) {
            setColumnsStore(columnsObject)
        }
        // verificar de si columns es igual a colums de la store si tiene los mismos names
        // si no son iguales se actualiza la store
        if (column.length === columnsObject.length) {
            //verificar si los arrays son distintos
            const isDifferent = columnsObject.some((column, index) => column.name !== columnsObject[index].name && column.active !== columnsObject[index].active)
            if (isDifferent) {
                setColumnsStore(columnsObject)
            }
        }
    }, [])
    return (
        <>
            <ColumnSelectorModal columns={column} setColumns={setColumnsStore} />
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
                                        column.map((column, index) => column.active && <td key={index} className="px-6 py-4 whitespace-nowrap">{String(row[column.name as keyof typeof row])}</td>)
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
function MainTableNoData() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2">No hay datos</th>
                    </tr>
                </thead>
            </table>
        </div>
    )

}
function MainTableError() {
    // Rojo
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="font-semibold text-red-700 dark:text-gray-400 uppercase p-2">Ocurrio un error</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
function MainTableSkeletonRow() {
    return (
        <tr className="bg-white dark:bg-gray-800">
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
        </tr>
    )
}
export default MainTable