import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { TerceroForm } from "../pages/CrearTercero"

export function useCrearTercero() {
    // crear una empresa
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { mutate: crearTercero, isPending, error: Error } = useMutation({
        mutationKey: ['createEmpresa'],
        mutationFn: async (empresa: TerceroForm) => {
            const fetchEmpresa = await fetch('http://127.0.0.1:8000/api/v1/terceros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('token') ?? ''
                },
                body: JSON.stringify(empresa)
            })
            return await fetchEmpresa.json()
        },
        onSuccess: () => {
            // actualizar la cachede las Terceros
            // Invalidar y refetch de la consulta de terceros
            queryClient.invalidateQueries({
                queryKey: ['terceros']
            });
            queryClient.invalidateQueries({
                queryKey: ['terceros', 1, 10]
            });
            // Redirigir a la página de terceros
            navigate('/administracion/terceros');

        },
        onError: (error: any) => {
            console.log(error)
        }
    })
    return { crearTercero, isPending, Error }
}