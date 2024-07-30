
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CheckTable } from '../types/check_table'
interface UseCheckboxTable {
    columns: CheckTable[]
    setColumns: (columns: CheckTable[]) => void
    compare: (columns: CheckTable[]) => CheckTable[]
}
const useCheckboxStore = (name: string) => {
    const useCheck = create<UseCheckboxTable>()(persist((set, get) => ({
        columns: [],
        setColumns: (columns: CheckTable[]) => set({ columns }),
        compare: (columns: CheckTable[]) => {
            const column = get().columns
            if (column.length != columns.length) {
                set({ columns })
            }
            if (column.length === columns.length) {
                //verificar si los arrays son distintos
                const isDifferent = columns.some((column, index) => column.name !== columns[index].name && column.active !== columns[index].active)
                if (isDifferent) {
                    set({ columns })
                }
            }
            return column
        }

    }), { name }))
    return useCheck
}
export function useCheckboxTable(name: string) {
    const useColumnStore = useCheckboxStore(name)
    const columns = useColumnStore(state => state.columns)
    const setColumnsStore = useColumnStore(state => state.setColumns)
    const compare = useColumnStore(state => state.compare)
    return { columns, setColumnsStore, compare }
}