import { useEffect, useReducer } from "react";
import { UseFormSetValue } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";
import { FormTercero } from "../../../pages/Administracion/Terceros/CrearTercero";
import { useQuery } from "@tanstack/react-query"
interface Ubicacion {
    departamento: string
    municipio: string
    cod_municipio: string
    codigo: number
}
interface ReducerState {
    ubicacions: Ubicacion[];
    ubicationSearch: string;
}
type ReducerAction = {
    type: "SET_UBICACIONS"
    payload: Ubicacion[]
} | {
    type: "SET_UBICATION_SEARCH"
    payload: string
}
const initialState: ReducerState = {
    ubicacions: [],
    ubicationSearch: ""
};
interface Props {
    setValue: UseFormSetValue<FormTercero>
}
const reducer = (state: ReducerState, action: ReducerAction) => {
    switch (action.type) {
        case "SET_UBICACIONS":
            return {
                ...state,
                ubicacions: action.payload
            };
        case "SET_UBICATION_SEARCH":
            return {
                ...state,
                ubicationSearch: action.payload
            };
        default:
            return state;
    }
};
const SearchUbication = ({ setValue }: Props) => {
    // hacer que la query se ejecute cuando se escriba en el input
    const { data, isLoading, isError, isFetching, refetch } = useQuery<{ data: Ubicacion[], status: string }>({
        queryKey: ['municipios', initialState.ubicationSearch],
        queryFn: async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/recursos/municipios?search=${state.ubicationSearch}&max=8`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            return data
        },
        enabled: false,
    })
    const [state, dispatch] = useReducer(reducer, initialState);
    // utiliza un debouncer para la busqueda de ubicaciones
    const hanndleDebounceUbication = useDebouncedCallback((_e: React.ChangeEvent<HTMLInputElement>) => {
        if (state.ubicationSearch.length === 0) {
            dispatch({
                type: "SET_UBICACIONS",
                payload: []
            })
            return
        }
        refetch()
    }, 300)
    const handdleUbicationSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "SET_UBICATION_SEARCH",
            payload: e.target.value
        })
        hanndleDebounceUbication(e)
    }
    useEffect(() => {
        if (!isLoading && !isError && !isFetching) {
            dispatch({
                type: "SET_UBICACIONS",
                payload: data?.data ?? []
            })
        }
    }, [isLoading, isError, isFetching, data])
    return (
        <div className="col-span-2 relative">
            <label form="municipio_search" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departamento\Municipio :</label>
            <input type="search" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Valbuena, Henandez..." required value={state.ubicationSearch} onChange={handdleUbicationSearch} />
            {
                !isLoading && !isError && !isFetching && state.ubicacions.length === 0 && <></>
            }
            {
                isLoading && <SearchUbicationListLoading />
            }
            {
                !isLoading && !isError && !isFetching && state.ubicacions.length !== 0 && <SearchUbicationList state={state} dispatch={dispatch} setValue={setValue} />
            }
        </div>
    )
}
interface SearchUbicationListProps {
    state: ReducerState
    dispatch: React.Dispatch<ReducerAction>
    setValue: UseFormSetValue<FormTercero>
}
function SearchUbicationList({ dispatch, setValue, state }: SearchUbicationListProps) {
    return (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg top-full">
            {
                state.ubicacions.map((ubicacion) => (
                    <div key={ubicacion.codigo} className="p-2.5 hover:bg-gray-100 cursor-pointer" onClick={() => {
                        setValue("id_municipio", ubicacion.codigo)
                        dispatch({
                            type: "SET_UBICACIONS",
                            payload: []
                        })
                        dispatch({
                            type: "SET_UBICATION_SEARCH",
                            payload: `${ubicacion.cod_municipio} - ${ubicacion.departamento} - ${ubicacion.municipio}`
                        })
                    }}>
                        {ubicacion.cod_municipio} - {ubicacion.departamento} - {ubicacion.municipio}
                    </div>
                ))
            }
        </div>
    )
}
function SearchUbicationListLoading() {
    return (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg top-full">
            <div className="p-2.5">
                Cargando...
            </div>
        </div>
    )
}

export default SearchUbication