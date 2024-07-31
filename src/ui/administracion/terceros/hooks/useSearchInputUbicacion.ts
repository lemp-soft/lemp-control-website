import { useEffect, useReducer } from "react";
import { UseFormSetValue } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";
import { useQuery } from "@tanstack/react-query"
import { MunicipioApi } from "../../../../shared/types/municipio";
import { TerceroForm } from "../../../administracion/terceros/pages/CrearTercero";
interface ReducerState {
    ubicacions: { codigo: number, content: string }[];
    ubicationSearch: string;
}
type ReducerAction = {
    type: "SET_UBICACIONS"
    payload: { codigo: number, content: string }[]
} | {
    type: "SET_UBICATION_SEARCH"
    payload: string
}
const initialState: ReducerState = {
    ubicacions: [],
    ubicationSearch: ""
};
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
interface Props {
    setValue: UseFormSetValue<TerceroForm>
}
export function useSearchInputUbicacion({ setValue }: Props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data, isLoading, isError, isFetching, refetch } = useQuery<{ data: MunicipioApi[], status: string }>({
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
    const handdleClick = (e: number) => {
        setValue("id_municipio", e)
        dispatch({
            type: "SET_UBICACIONS",
            payload: []
        })
    }
    useEffect(() => {
        if (!isLoading && !isError && !isFetching) {
            dispatch({
                type: "SET_UBICACIONS",
                payload: data?.data.map((municipio) => ({ codigo: municipio.codigo, content: municipio.municipio })) ?? []
            })
        }
    }, [isLoading, isError, isFetching, data])
    return {
        isLoading,
        isError,
        isFetching,
        state,
        handdleSearch: handdleUbicationSearch,
        handdleClick
    }
}