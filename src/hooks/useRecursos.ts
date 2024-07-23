import { useQuery } from "@tanstack/react-query";
export function useRecursos(tipo: "monedas" | "paises" | "departamentos" | "municipios" | "regimenes" | "planes" | "tipos-de-terceros" | "usuarios-tipos") {
    const { data, isLoading, isError } = useQuery({
        queryKey: [tipo],
        queryFn: async () => {
            const response = await fetch('http://127.0.0.1:8000/api/v1/recursos/' + tipo)
            return response.json()
        }
    })
    return { data, isLoading, isError }
}