import { Terceros } from "../types/terceros"
interface fechedTerceros {
    data: Terceros[]
    message: string
    status: string

}
import axios from "axios"
export async function getTerceros() {
    try {
        let fetchterceros = await axios.get<fechedTerceros>('http://127.0.0.1:8000/api/v1/terceros')
        return fetchterceros.data.data
    } catch (error) {

    }

}