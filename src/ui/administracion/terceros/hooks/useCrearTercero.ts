import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { TerceroForm } from "../pages/CrearTercero"
import { TerceroRepository } from "../../../../infrastructure/administracion/terceros/repositories/TerceroRepasitory"

export function useCrearTercero() {
    // crear una empresa
    const terceroRepository = new TerceroRepository()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { mutate: crearTercero, isPending, error: Error } = useMutation({
        mutationKey: ['createEmpresa'],
        mutationFn: async (empresa: TerceroForm) => {
            return await terceroRepository.createTercero({
                "nit": empresa.nit,
                "id_municipio": empresa.id_municipio,
                "tipo": Number(empresa.tipo.toString().split(" - ")[0]),
                "dv": "5",
                "estado": Boolean(empresa.estado),
                "primer_apellido": empresa.primer_apellido,
                "segundo_apellido": empresa.segundo_apellido,
                "primer_nombre": empresa.primer_nombre,
                "segundo_nombre": empresa.segundo_nombre,
                "razon_social": empresa.razon_social,
                "direccion": empresa.direccion,
                "telefono": empresa.telefono,
                "correo": empresa.correo,
                "regimenes": empresa.regimenes,
                "responsabilidades": empresa.responsabilidades,
                "actividad_economica": empresa.actividad_economica,
            })
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