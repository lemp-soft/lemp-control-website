import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EmpresaRepository } from "@infra/administracion/empresas/repositories/EmpresaRepository"
export function useEliminarEmpresas() {
    const empresaRepository = new EmpresaRepository()
    const queryClient = useQueryClient()
    const { mutate:DeleteEmpresa, error: Error, isPending: Pending } = useMutation({
        mutationFn: async (codigo: string) => {
            await empresaRepository.deleteEmpresa(codigo)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['empresas']
            });
            queryClient.invalidateQueries({
                queryKey: ['empresas', 1, 10]
            });
        },
    })
    return { DeleteEmpresa, Pending, Error }
}