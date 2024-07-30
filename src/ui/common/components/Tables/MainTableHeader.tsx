import { useState } from "react"
import { Link } from "react-router-dom"
import { CheckTable } from "../../../../shared/types/check_table"

interface PropsMainTableHeader {
    columns: CheckTable[]
    setColumns: (columns:CheckTable[]) => void
    haddleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const MainTableHeader = ({ columns, setColumns,haddleSearch }: PropsMainTableHeader) => {
    const [modal, setModal] = useState(false)
    return (<>
        {/* centrar verticalmente */}
        <div className="flex justify-between items-center mb-6">
            <Link to={'/administracion/terceros/crear'} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Crear Tercero
                </span>
            </Link >
            <div className="relative w-4/6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input onChange={haddleSearch} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
            </div>
            <div className="w-auto flex justify-end items-center mb-6 gap-4 flex-1">
                <span>Filtrar</span>
                <svg onClick={() => setModal(true)} className="cursor-pointer w-8 aspect-auto text-gray-800 dark:text-white hover:text-lime-800 hover:bg-lime-200 p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
                </svg>
            </div>
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

export default MainTableHeader