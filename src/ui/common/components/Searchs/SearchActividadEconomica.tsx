import { useEffect, useReducer } from "react";
import { UseFormSetValue } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";
import { useQuery } from "@tanstack/react-query"
import { Ciiu } from "../../../../shared/types/ciiu";
import { TerceroForm } from "../../../administracion/terceros/pages/CrearTercero";
interface ReducerState {
    ciius: Ciiu[];
    ciiuSearch: string;
}
type ReducerAction = { type: "SET_CIIUS", payload: Ciiu[] } | { type: "SET_CIIUS_SEARCH", payload: string }
const initialState: ReducerState = { ciius: [], ciiuSearch: "" };
const reducer = (state: ReducerState, action: ReducerAction) => {
    switch (action.type) {
        case "SET_CIIUS":
            return { ...state, ciius: action.payload };
        case "SET_CIIUS_SEARCH":
            return { ...state, ciiuSearch: action.payload };
        default:
            return state;
    }
}
interface Props {
    setValue: UseFormSetValue<TerceroForm>
}
const SearchActividadEconomica = ({setValue}:Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data, isLoading, isError, isFetching, refetch } = useQuery<{ data: Ciiu[], status: string }>({
        queryKey: ['ciius', state.ciiuSearch],
        queryFn: async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/recursos/ciiu?search=${state.ciiuSearch}&max=5`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            return data
        },
        enabled: false,
    })
    const hanndleDebounceUbication = useDebouncedCallback((_e: React.ChangeEvent<HTMLInputElement>) => {
        if (state.ciiuSearch.length === 0) {
            dispatch({
                type: "SET_CIIUS",
                payload: []
            })
            return
        }
        refetch()
    }, 300)
    const handdleUbicationSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "SET_CIIUS_SEARCH",
            payload: e.target.value
        })
        hanndleDebounceUbication(e)
    }
    useEffect(() => {
        if (!isLoading && !isError && !isFetching) {
            dispatch({
                type: "SET_CIIUS",
                payload: data?.data ?? []
            })
        }
    }, [isLoading, isError, isFetching, data])
    return (
        <div className="col-span-4 z-50 relative mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <label form="municipio_search" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Actividad economica Principal :</label>
            <input type="search" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Valbuena, Henandez..." required value={state.ciiuSearch} onChange={handdleUbicationSearch} />
            {
                !isLoading && !isError && !isFetching && state.ciiuSearch.length === 0 && <></>
            }
            {
                isLoading && <SearchCiuuListLoading />
            }
            {
                !isLoading && !isError && !isFetching && state.ciiuSearch.length !== 0 && <SearchCiuuList dispatch={dispatch} setValue={setValue} state={state} />
            }
        </div>
    )
}
interface SearchCiuuListProps {
    dispatch: React.Dispatch<ReducerAction>
    setValue: UseFormSetValue<TerceroForm>
    state: ReducerState
}
function SearchCiuuList({ dispatch, setValue, state }:SearchCiuuListProps) {
    return (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg top-full">
            {
                state.ciius.map((ubicacion) => (
                    <div key={ubicacion.codigo} className="p-2.5 hover:bg-gray-100 cursor-pointer" onClick={() => {
                        setValue("actividad_economica", ubicacion.codigo)
                        dispatch({
                            type: "SET_CIIUS",
                            payload: []
                        })
                        dispatch({
                            type: "SET_CIIUS_SEARCH",
                            payload: `${ubicacion.codigo} - ${ubicacion.concepto}`
                        })
                    }}>
                        {ubicacion.codigo} - {ubicacion.concepto}
                    </div>
                ))
            }
        </div>
    )
}
function SearchCiuuListLoading() {
    return (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg top-full">
            <div className="p-2.5">
                Cargando...
            </div>
        </div>
    )
}
export default SearchActividadEconomica