import { useDebouncedCallback } from "use-debounce";
import { UseFormSetValue } from "react-hook-form";
import { TerceroForm } from "../pages/CrearTercero";
import { useEffect, useReducer } from "react";
import { Ciiu } from "../../../../shared/types/ciiu";
import { useQuery } from "@tanstack/react-query";
interface ReducerState {
    ciius: { codigo: number, content: string }[];
    ciiuSearch: string;
}
type ReducerAction = { type: "SET_CIIUS", payload: { codigo: number, content: string }[] } | { type: "SET_CIIUS_SEARCH", payload: string }
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
export function useSearchInputActividadEconomica({ setValue }: { setValue: UseFormSetValue<TerceroForm> }) {
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
    const handdleClick = (e: number) => {
        setValue("actividad_economica", e)
        dispatch({
            type: "SET_CIIUS",
            payload: []
        })
    }
    useEffect(() => {
        if (!isLoading && !isError && !isFetching) {
            dispatch({
                type: "SET_CIIUS",
                payload: data?.data.map((item) => ({ codigo: item.codigo, content: item.concepto })) ?? []
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