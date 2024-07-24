import { create } from 'zustand'
import { persist } from 'zustand/middleware'
interface Check { name: string, active: boolean }
interface UseCheckboxTable {
    columns: Check[]
    setColumns: (columns: Check[]) => void
}
export const useCheckboxTable = (name: string) => {
    const useCheck = create<UseCheckboxTable>()(persist((set) => ({
        columns: [],
        setColumns: (columns: Check[]) => set({ columns }),
    }), { name }))
    return useCheck
}