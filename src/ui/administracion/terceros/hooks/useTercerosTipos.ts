import { useQuery } from "@tanstack/react-query"; 
import { TerceroRepository } from "../../../../infrastructure/administracion/terceros/repositories/TerceroRepasitory";
export function useTercerosTipos() {
    const terceroRepository = new TerceroRepository();
    const { data, isLoading, error } = useQuery({
        queryKey: ['tercerosTipos'],
        queryFn: async () => {
            return terceroRepository.getTerceroTipos();
        }
    });
    return {
        data,
        isLoading,
        error
    }
}