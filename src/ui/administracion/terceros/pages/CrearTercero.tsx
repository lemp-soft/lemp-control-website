import ContainerLayout from "../../../common/layouts/ContainerLayout"
import MainLayout from "../../../common/layouts/MainLayout"
import SearchInputActividadEconomica from "../components/SearchInputActividadEconomica"
import SearchInputUbicacion from "../components/SearchInputUbicacion"
import InputBasic, { TerceroForm } from "../components/Imputs/InputForm"
import SelectInputResponsabilidades from "../components/SelectInputResponsabilidades"
import SelectInputRegimanes from "../components/SelectInputRegimanes"
import SelectInputActive from "../components/SelectInputActive"
import { SubmitHandler, useForm } from "react-hook-form"
import SelectInputTipoTerceros from "../components/SelectInputTipoTerceros"
import { useEffect, useState } from "react"
const CrearTercero = () => {
    const { register, handleSubmit, setValue, watch } = useForm<TerceroForm>()
    const [toggleRazonAndNobre, setToggleRazonAndNobre] = useState(false)
    const handdleToggle = () => {
        setToggleRazonAndNobre(state => !state)
    }
    const onSubmit: SubmitHandler<TerceroForm> = (data: TerceroForm) => {
        console.log(data)
    }
    return (
        <MainLayout>
            <main>
                <ContainerLayout>
                    <h1 className="text-2xl font-bold my-4">Crear un Tercero</h1>
                    <div className="w-full h-full p-4 bg-white rounded-2xl">
                        <form className="mt-8 grid gap-6 mb-6 md:grid-cols-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-span-4">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value={`${toggleRazonAndNobre}`} className="sr-only peer" onClick={handdleToggle} />
                                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Razon o Nobre</span>
                                </label>
                            </div>
                            <SelectInputTipoTerceros register={register} registerName="tipo" registerOptions={{ required: true }} setValue={setValue} />
                            <InputBasic type="number" id="first_name" placeholder="#########" required register={register} label="Numero de identificacion :" registerName="nit" registerOptions={{ required: true }} />
                            {
                                toggleRazonAndNobre ? (
                                    <InputBasic className="col-span-2" type="text" id="Razon_social" placeholder="Mag Donal" label="Razon social :" required register={register} registerName="razon_social" registerOptions={{ required: true }} />
                                ) : ""
                            }
                            {
                                !toggleRazonAndNobre ? (
                                    <>
                                        <InputBasic type="text" id="Primer_apellido" placeholder="Juan" label="Primer Apellido :" required register={register} registerName="primer_apellido" registerOptions={{ required: true }} />
                                        <InputBasic type="text" id="Segundo_apellido" placeholder="Felipe" label="Segundo Apellido :" register={register} registerName="segundo_apellido" registerOptions={{ required: false }} />
                                        <InputBasic type="text" id="Primer_nombre" placeholder="Valbuena" label="Primer Nombre :" required register={register} registerName="primer_nombre" registerOptions={{ required: true }} />
                                        <InputBasic type="text" id="Segundo_nombre" placeholder="Valderrama" label="Segundo Nombre :" register={register} registerName="segundo_nombre" registerOptions={{ required: false }} />
                                    </>
                                ) : ""
                            }
                            <InputBasic type="number" id="Telefono_1" placeholder="##########" label="Telefono 1 :" required register={register} registerName="telefono" registerOptions={{ required: true }} />
                            <InputBasic type="number" id="Telefono_2" placeholder="##########" label="Telefono 2 :" register={register} registerName="telefono_movil" registerOptions={{ required: false }} />
                            <SearchInputUbicacion className="col-span-2" label="Ubicacion - Departamento/Municipio :" setValue={setValue} />
                            <InputBasic className="col-span-2" type="email" id="Correo" placeholder="ejemplecoreo@gmail.com" label="Correo electronico :" required register={register} registerName="correo" registerOptions={{ required: true }} />
                            <SearchInputActividadEconomica label="Actividad economica :" className={toggleRazonAndNobre ? 'col-span-2' : 'col-span-4'} setValue={setValue} />
                            <SelectInputResponsabilidades register={register} registerName="responsabilidades" registerOptions={{ required: true }} />
                            <SelectInputRegimanes register={register} registerName="regimenes" registerOptions={{ required: true }} />
                            <SelectInputActive register={register} registerName="estado" registerOptions={{ required: true }} />
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