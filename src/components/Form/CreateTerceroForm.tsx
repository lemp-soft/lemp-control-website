interface Props {
    modal: boolean
    toggleModal: () => void
}
import { useRecursos } from "../../hooks/useRecursos"
import tiposTerceros from "../../recursos/tipos-de-terceros.json"
const CreateTerceroForm = ({ modal, toggleModal }: Props) => {
    const { data} = useRecursos("tipos-de-terceros")
    return (
        <div id="crud-modal" tabIndex={modal ? -1 : 2} className={` ${!modal ? 'hidden' : ''} overflow-y-auto ${!modal ? 'overflow-x-hidden' : ''} fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className="w-4/5 h-5/6 p-4 bg-white rounded-2xl">
                <form className="mt-8 grid gap-6 mb-6 md:grid-cols-4">
                    <div>
                        <label form="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de contribuyente</label>
                        <select id="countries" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>-- seleccione --</option>
                            {
                                data?.data.map((tipo: any) => (
                                    <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de identificacion :</label>
                        <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="#########" required />
                    </div>
                    <div className="col-span-2">
                        <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razon social :</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ender platacos" required />
                    </div>
                    <div>
                        <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primer Apellido :</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Valbuena, Henandez..." required />
                    </div>
                    <div>
                        <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo Apellido :</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Valderrama, Chacon" required />
                    </div>
                    <div>
                        <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primer Nombre :</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Juan, Brayan" required />
                    </div>
                    <div>
                        <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo Nombre :</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Andres, Felipe" required />
                    </div>
                    <div className="col-span-2">
                        <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Direccion principal :</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Suba, Bilbao calle 123 # 43-65" required />
                    </div>
                    <div>
                        <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono 1 :</label>
                        <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="##########" required />
                    </div>
                    <div>
                        <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono 2 :</label>
                        <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="##########" required />
                    </div>
                    <div className="col-span-2">
                        <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciudad/Departamento :</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ibague, medellin, cali..." required />
                    </div>
                    <div className="col-span-2">
                        <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electronico :</label>
                        <input type="email" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ejemplecoreo@gmail.com" required />
                    </div>
                    <div className="col-span-4">
                        <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Actividad economica principal :</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="vender ropa..." required />
                    </div>
                    <div>
                        <label form="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Responsabilidades Fiscales :</label>
                        <select id="countries" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>-- seleccione --</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <label form="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Régimen Fiscal :</label>
                        <select id="countries" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>-- seleccione --</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <label form="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado :</label>
                        <select id="countries" className="w-2/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>activo</option>
                            <option value="DE">inactivo</option>
                        </select>
                    </div>
                    <div>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Consultar RUT
                            </span>
                        </button>
                    </div>
                </form>
                <button onClick={toggleModal} className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Salir del formulario
                    </span>
                </button>
            </div>
        </div>
    )
}

export default CreateTerceroForm