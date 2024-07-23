import { useQuery } from "@tanstack/react-query"
export function useEmpresas() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['empresas'],
        queryFn: async () => {
            const response = await fetch('http://127.0.0.1:8000/api/v1/empresas',{
                headers: {
                    Authorization: localStorage.getItem('token') ?? ''
                }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        }

    })
    return { data, isLoading, isError }
}