
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
export interface Check { name: string, active: boolean }
interface UseCheckboxTable {
    columns: Check[]
    setColumns: (columns: Check[]) => void
    compare: (columns: Check[]) => Check[]
}
const useCheckboxStore = (name: string) => {
    const useCheck = create<UseCheckboxTable>()(persist((set, get) => ({
        columns: [],
        setColumns: (columns: Check[]) => set({ columns }),
        compare: (columns: Check[]) => {
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
    const column = useColumnStore(state => state.columns)
    const setColumnsStore = useColumnStore(state => state.setColumns)
    const compare = useColumnStore(state => state.compare)
    return { column, setColumnsStore, compare }
}