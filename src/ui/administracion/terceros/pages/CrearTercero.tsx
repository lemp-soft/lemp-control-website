import ContainerLayout from "../../../common/layouts/ContainerLayout"
import MainLayout from "../../../common/layouts/MainLayout"
import SearchInputActividadEconomica from "../components/SearchInputActividadEconomica"
import SearchInputUbicacion from "../components/SearchInputUbicacion"
import InputBasic, { TerceroForm } from "../components/Imputs/InputForm"
import SelectInputResponsabilidades from "../components/SelectInputResponsabilidades"
import SelectInputRegimanes from "../components/SelectInputRegimanes"
import SelectInputActive from "../components/SelectInputActive"
import { SubmitHandler, useForm } from "react-hook-form"
import { useCrearTercero } from "../hooks"
import { useEffect } from "react"
import SelectInputTipoTerceros from "../components/SelectInputTipoTerceros"
// import { useEffect } from "react"
const CrearTercero = () => {
    const { crearTercero } = useCrearTercero()
    const { register, handleSubmit, setValue } = useForm<TerceroForm>()
    const onSubmit: SubmitHandler<TerceroForm> = (data: TerceroForm) => {
        console.log(data)
        crearTercero({
            "nit": data.nit,
            "id_municipio": data.id_municipio,
            "tipo": Number(data.tipo.toString().split(" - ")[0]),
            "dv": "5",
            "estado": Boolean(data.estado),
            "primer_apellido": data.primer_apellido,
            "segundo_apellido": data.segundo_apellido,
            "primer_nombre": data.primer_nombre,
            "segundo_nombre": data.segundo_nombre,
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
                            <SelectInputTipoTerceros register={register} registerName="tipo" registerOptions={{ required: true }} />
                            <InputBasic type="number" id="first_name" placeholder="#########" required register={register} label="Numero de identificacion :" registerName="nit" registerOptions={{ required: true }} />
                            <InputBasic className="col-span-2" type="text" id="Razon_social" placeholder="#########" label="Razon social :" required register={register} registerName="razon_social" registerOptions={{ required: true }} />
                            <InputBasic type="text" id="Primer_apellido" placeholder="#########" label="Primer Apellido :" required register={register} registerName="primer_apellido" registerOptions={{ required: true }} />
                            <InputBasic type="text" id="Segundo_apellido" placeholder="#########" label="Segundo Apellido :" register={register} registerName="segundo_apellido" registerOptions={{ required: false }} />
                            <InputBasic type="text" id="Primer_nombre" placeholder="#########" label="Primer Nombre :" required register={register} registerName="primer_nombre" registerOptions={{ required: true }} />
                            <InputBasic type="text" id="Segundo_nombre" placeholder="#########" label="Segundo Nombre :" register={register} registerName="segundo_nombre" registerOptions={{ required: false }} />
                            <InputBasic className="col-span-2" type="text" id="Direccion" placeholder="#########" label="Direccion :" required register={register} registerName="direccion" registerOptions={{ required: true }} />
                            <InputBasic type="number" id="Telefono_1" placeholder="##########" label="Telefono 1 :" required register={register} registerName="telefono" registerOptions={{ required: true }} />
                            <InputBasic type="number" id="Telefono_2" placeholder="##########" label="Telefono 2 :" register={register} registerName="telefono_movil" registerOptions={{ required: false }} />
                            <SearchInputUbicacion className="col-span-2" label="Ubicacion - Departamento/Municipio :" setValue={setValue} />
                            <InputBasic className="col-span-2" type="email" id="Correo" placeholder="ejemplecoreo@gmail.com" label="Correo electronico :" required register={register} registerName="correo" registerOptions={{ required: true }} />
                            <SearchInputActividadEconomica label="Actividad economica :" className="col-span-4" setValue={setValue} />
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