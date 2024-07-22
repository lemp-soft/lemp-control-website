interface FetchTiposTerceros {
    data: TiposTerceros[]
    message: string
    status: string
}
import axios from "axios";
import { TiposTerceros } from "../types/TiposTerceros";

export async function getTiposTerceros() {
    try {
        const tiposTerceros = await axios.get<FetchTiposTerceros>('http://127.0.0.1:8000/api/v1/recursos/tipos-de-terceros')
        return tiposTerceros.data.data
    } catch (error) {
        
    }
}