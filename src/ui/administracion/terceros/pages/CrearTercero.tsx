import { useForm } from "react-hook-form"
import { TerceroCreateDTO } from "../../../../domain/administracion/terceros/entities/tercero"
import ContainerLayout from "../../../common/layouts/ContainerLayout"
import MainLayout from "../../../common/layouts/MainLayout"
import { useCrearTercero, useTercerosTipos } from "../hooks"
import SearchUbication from "../../../common/components/Searchs/SearchUbication"
import SearchActividadEconomica from "../../../common/components/Searchs/SearchActividadEconomica"
export interface TerceroForm extends Omit<TerceroCreateDTO, 'codigo_ciiu'> {
    actividad_economica: number
}
const CrearTercero = () => {
    const { data: TercerosTiposData } = useTercerosTipos()
    const { crearTercero } = useCrearTercero()
    const { register, handleSubmit, setValue } = useForm<TerceroForm>()
    const onSubmit = (data: TerceroForm) => {
        crearTercero({
            "nit": data.nit,
            "id_municipio": data.id_municipio,
            "tipo": Number(data.tipo.toString().split(" - ")[0]),
            "dv": "5",
            "estado": Boolean(data.estado),
            "primer_apellido": data.primer_apellido,
            "primer_nombre": data.primer_nombre,
            "razon_social": data.razon_social,
            "direccion": data.direccion,
            "telefono": data.telefono,
            "correo": data.correo,
            "regimenes": data.regimenes,
            "responsabilidades": data.responsabilidades,
            "actividad_economica": data.actividad_economica,
        })
    }
    return (
        <MainLayout>
            <main>
                <ContainerLayout>
                    <h1 className="text-2xl font-bold my-4">Crear un Tercero</h1>
                    <div className="w-full h-full p-4 bg-white rounded-2xl">
                        <form className="mt-8 grid gap-6 mb-6 md:grid-cols-4" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label form="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de contribuyente</label>
                                <select id="countries" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("tipo", { required: true })}>
                                    {
                                        TercerosTiposData?.map((tipo) => (
                                            <option key={tipo.codigo} value={tipo.codigo}>{tipo.codigo} - {tipo.nombre}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de identificacion :</label>
                                <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="#########" required {...register("nit", { required: true })} />
                            </div>
                            <div className="col-span-2">
                                <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razon social :</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ender platacos" required {...register("razon_social", { required: true })} />
                            </div>
                            <div>
                                <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primer Apellido :</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Valbuena, Henandez..." required {...register("primer_apellido", { required: true })} />
                            </div>
                            <div>
                                <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo Apellido :</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Valderrama, Chacon" {...register("segundo_apellido", { required: false })} />
                            </div>
                            <div>
                                <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primer Nombre :</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Juan, Brayan" required {...register("primer_nombre", { required: true })} />
                            </div>
                            <div>
                                <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo Nombre :</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Andres, Felipe" {...register("segundo_nombre", { required: false })} />
                            </div>
                            <div className="col-span-2">
                                <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Direccion principal :</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Suba, Bilbao calle 123 # 43-65" required {...register("direccion", { required: true })} />
                            </div>
                            <div>
                                <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono 1 :</label>
                                <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="##########" required {...register("telefono", { required: true })} />
                            </div>
                            <div>
                                <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono 2 :</label>
                                <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="##########"{...register("telefono_movil", { required: false })} />
                            </div>
                            <SearchUbication setValue={setValue} />
                            <div className="col-span-2">
                                <label form="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electronico :</label>
                                <input type="email" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ejemplecoreo@gmail.com" required {...register("correo", { required: true })} />
                            </div>
                            <SearchActividadEconomica setValue={setValue} />
                            <div>
                                <label form="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Responsabilidades Fiscales :</label>
                                <select {
                                    ...register("responsabilidades", { required: true })
                                } id="countries" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="O-13 Gran Contribuyente">O-13 Gran Contribuyente</option>
                                    <option value="O-15 Autorretenedor">O-15 Autorretenedor</option>
                                    <option value="O-23 Agente de Retención IVA">O-23 Agente de Retención IVA</option>
                                    <option value="O-47 Regimen Simple de Tributación">O-47 Regimen Simple de Tributación</option>
                                    <option value="R-99-PN No aplica, otros">R-99-PN No aplica, otros</option>
                                </select>
                            </div>
                            <div>
                                <label form="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Régimen Fiscal :</label>
                                <select {
                                    ...register("regimenes", { required: true })
                                } id="countries" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="48 - Responsable del impuesto sobre las ventas - IVA">48 - Responsable del impuesto sobre las ventas - IVA</option>
                                    <option value="49 - no responsable de IVA">49 - no responsable de IVA</option>
                                </select>
                            </div>
                            <div>
                                <label form="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado :</label>
                                <select {
                                    ...register("estado", { required: true })
                                } id="countries" className="w-2/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected value="true">activo</option>
                                    <option value="false">inactivo</option>
                                </select>
                            </div>
                            <div>
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Crear Tercero
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </ContainerLayout>
            </main >
        </MainLayout >
    )
}

export default CrearTercero