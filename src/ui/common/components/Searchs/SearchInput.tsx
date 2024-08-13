import { useEffect } from "react";

interface SearchInputProps<T> {
    isLoading: boolean;
    isError: boolean;
    isFetching: boolean;
    state: {
        Search: string;
        ListSearch: T[];
    }
    handdleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handdleClick: (e: number) => void;
    className?: string;
    label?: string;
}
export function SearchInput<T extends { codigo: number, content: string }>({ isError, isFetching, isLoading, state, handdleSearch, handdleClick, className, label }: SearchInputProps<T>) {
    return (
        <div className={`z-50 relative mb-2 text-sm font-medium text-gray-900 dark:text-white ${className}`}>
            <label form="municipio_search" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input type="search" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Valbuena, Henandez..." value={state.Search} onChange={handdleSearch} />
            {
                !isLoading && !isError && !isFetching && state.Search.length === 0 && <></>
            }
            {
                isLoading && <SearchListLoading />
            }
            {
                !isLoading && !isError && !isFetching && state.Search.length !== 0 && <SearchList handdleClick={handdleClick} state={state} />
            }
        </div>
    )
}
interface SearchListProps<T> {
    handdleClick: (e: number) => void;
    state: {
        ListSearch: T[];
        Search: string;
    }
}
function SearchList<T extends { codigo: number, content: string }>({ handdleClick, state }: SearchListProps<T>) {
    return (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg top-full">
            {
                state.ListSearch.map((item) => (
                    <div key={item.codigo} className="p-2.5 hover:bg-gray-100 cursor-pointer" onClick={() => handdleClick(item.codigo)}>
                        {item.codigo} - {item.content}
                    </div>
                ))
            }
        </div>
    )
}
function SearchListLoading() {
    return (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg top-full">
            <div className="p-2.5">
                Cargando...
            </div>
        </div>
    )
}
export default SearchInput