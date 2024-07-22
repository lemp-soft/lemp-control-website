import axios from "axios"
export async function getTerceros() {
    // const terceros = await globalThis.fetch('http://localhost/api-lemp/V1/terceros/',{
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',   
    //     }
    // })
    // .then(response => response.json())
    // console.log(terceros)
    const terceros = await axios.get('http://127.0.0.1:8000/api/v1/terceros')
    return terceros
}