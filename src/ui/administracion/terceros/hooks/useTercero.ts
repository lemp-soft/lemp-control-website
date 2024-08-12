import { useQuery } from "@tanstack/react-query"
import { TerceroRepository } from "../../../../infrastructure/administracion/terceros/repositories/TerceroRepasitory"
import { EmpresaRepository } from "../../../../infrastructure/administracion/empresas/repositories/EmpresaRepository"
export function useTercero(nit: number) {
    const terceroRepository = new TerceroRepository()
    const { data:dataTercero, isLoading:LoadingTercero, isError:ErrorTercero } = useQuery({
        queryKey: ['tercero', nit],
        queryFn: async () => {
            const response = await terceroRepository.getTercero(nit)
            return response
        }
    })
    const empresaRepository = new EmpresaRepository()
    const { data: dataEmpresa, isLoading: LoadingEmpresa, isError: ErrorEmpresa } = useQuery({
        queryKey: ['tercero', 'empresa', nit],
        queryFn: async () => {
            const response = await empresaRepository.getEmpresaPorNitDeTercero(nit)
            console.log(response)
            return response
        }
    })

    return { dataTercero, LoadingTercero, ErrorTercero, dataEmpresa, LoadingEmpresa, ErrorEmpresa }
}