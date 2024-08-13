import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TerceroRepository } from "@infra/administracion/terceros/repositories/TerceroRepasitory";
import { TerceroUpdateDTO } from "@domain/administracion/terceros/entities/tercero";
import { useNavigate } from "react-router-dom";
export function useModifyTercero({ nit }: { nit: number }) {
    const navigation = useNavigate()
    const terceroRepository = new TerceroRepository()
    const queryClient = useQueryClient()
    const { error: Error, mutate: ModificarTercero, isPending: Loading } = useMutation({
        mutationKey: ['modifyTercero'],
        mutationFn: async (tercero: TerceroUpdateDTO) => {
            return await terceroRepository.updateTercero(tercero, nit)
        },
        onError: (error) => {
            console.log(error)
        },
        onSuccess: async () => {
            console.log("Tercero modificado")
            await queryClient.invalidateQueries({
                queryKey: ['terceros']
            });
            await queryClient.invalidateQueries({
                queryKey: ['terceros', 1, 10]
            });
            navigation('/administracion/terceros')
        }
    })
    return { ModificarTercero, Loading, Error }
}