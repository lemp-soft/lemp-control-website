import { UseFormSetValue } from "react-hook-form";
import SearchInput from "../../../common/components/Searchs/SearchInput";
import { useSearchInputActividadEconomica } from "../hooks/useSearchInputActividadEconomica";
import { TerceroForm } from "../components/Imputs/InputForm";
interface Props {
    setValue: UseFormSetValue<TerceroForm>
    className?: string;
    label?: string;
}
const SearchInputActividadEconomica = ({ setValue, className, label }: Props) => {
    const { isLoading, isError, isFetching, state, handdleSearch, handdleClick } = useSearchInputActividadEconomica({ setValue })
    return (
        <>
            <SearchInput label={label} className={className} isError={isError} isFetching={isFetching} isLoading={isLoading} state={{ ListSearch: state.ciius, Search: state.ciiuSearch }} handdleSearch={handdleSearch} handdleClick={handdleClick} />
        </>
    )
}

export default SearchInputActividadEconomica