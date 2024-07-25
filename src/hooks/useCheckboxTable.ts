import { useEffect } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
interface Check { name: string, active: boolean }
interface UseCheckboxTable {
    columns: Check[]
    setColumns: (columns: Check[]) => void
}
const useCheckboxStore = (name: string) => {
    const useCheck = create<UseCheckboxTable>()(persist((set) => ({
        columns: [],
        setColumns: (columns: Check[]) => set({ columns }),
    }), { name }))
    return useCheck
}
export function useCheckboxTable(name: string, columnsObject: Check[]) {
    const useColumnStore = useCheckboxStore(name)
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
    return { column, setColumnsStore }
}