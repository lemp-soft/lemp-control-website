// {
//   "codigo": "1234567890",
//   "clave": "123456"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
// }

const Iniciar = () => {
  const [codigo, setCodigo] = useState("")
  const [clave, setClave] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const login = await fetch('http://127.0.0.1:8000/api/v1/control/log/in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ codigo, clave })
    })
    const data = await login.json()
    if (data.status === "success") {
      localStorage.setItem('token', data.data.token)
      navigate('/')
    } else {
      alert('Código o clave incorrectos')
    }
  }
  const handleCodigo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodigo(e.target.value)
  }
  const handleClave = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClave(e.target.value)
  }
  return (
    <main className="w-full h-screen flex justify-center items-center bg-slate-50">
        <form className="w-96 h-auto p-4 shadow-lg rounded-md bg-white" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigo">
                    Código
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="codigo"
                    type="text"
                    placeholder="Código"
                    onChange={handleCodigo}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clave">
                    Clave
                </label>
                <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="clave"
                    type="password"
                    placeholder="******************"
                    onChange={handleClave}
                />
            </div>
            <div className="flex items-center justify-between">
                <input
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                    type="submit" value={"Iniciar"}
                />

            </div>        
        </form>
    </main>
  )
}

export default Iniciar