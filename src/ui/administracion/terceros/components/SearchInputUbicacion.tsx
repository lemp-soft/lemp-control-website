import { UseFormSetValue } from "react-hook-form"
import { useSearchInputUbicacion } from "../hooks/useSearchInputUbicacion"
import { TerceroForm } from "../pages/CrearTercero"
import SearchInput from "../../../common/components/Searchs/SearchInput"
interface Props {
  setValue: UseFormSetValue<TerceroForm>
  className?: string
}
const SearchInputUbicacion = ({ setValue, className }: Props) => {
  const { handdleClick, handdleSearch, isError, isFetching, isLoading, state } = useSearchInputUbicacion({ setValue })
  return (
    <>
      <SearchInput className={className} isError={isError} isFetching={isFetching} isLoading={isLoading} state={{ ListSearch: state.ubicacions, Search: state.ubicationSearch }} handdleSearch={handdleSearch} handdleClick={handdleClick} />
    </>
  )
}

export default SearchInputUbicacion