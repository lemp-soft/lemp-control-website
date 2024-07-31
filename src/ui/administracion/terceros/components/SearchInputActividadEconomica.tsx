import { UseFormSetValue } from "react-hook-form";
import SearchInput from "../../../common/components/Searchs/SearchInput";
import { useSearchInputActividadEconomica } from "../hooks/useSearchInputActividadEconomica";
import { TerceroForm } from "../pages/CrearTercero";
interface Props {
    setValue: UseFormSetValue<TerceroForm>
    className?: string;
}
const SearchInputActividadEconomica = ({ setValue, className }: Props) => {
    const { isLoading, isError, isFetching, state, handdleSearch, handdleClick } = useSearchInputActividadEconomica({ setValue})
    return (
        <>
            <SearchInput className={className} isError={isError} isFetching={isFetching} isLoading={isLoading} state={{ ListSearch: state.ciius, Search: state.ciiuSearch }} handdleSearch={handdleSearch} handdleClick={handdleClick} />
        </>
    )
}

export default SearchInputActividadEconomica