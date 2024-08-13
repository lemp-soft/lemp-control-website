import { TerceroRepository } from "@infra/administracion/terceros/repositories/TerceroRepasitory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export function useDeleteTercero() {
    // crear una empresa
    const terceroRepository = new TerceroRepository()
    const queryClient = useQueryClient()
    const { error, mutate: EliminarTercero, isPending:Loadding } = useMutation({
        mutationKey: ['deleteTercero'],
        mutationFn: async (nit: number) => {
            return await terceroRepository.deleteTercero(nit)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['terceros']
            });
            queryClient.invalidateQueries({
                queryKey: ['terceros', 1, 10]
            });
        },
        onError: (error: any) => {
            console.log(error)
        }
    })
    return { EliminarTercero, Loadding, error }
}