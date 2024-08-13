import ContainerLayout from "../../../common/layouts/ContainerLayout"
import MainLayout from "../../../common/layouts/MainLayout"
import SearchInputActividadEconomica from "../components/SearchInputActividadEconomica"
import SearchInputUbicacion from "../components/SearchInputUbicacion"
import InputBasic, { TerceroForm } from "../components/Imputs/InputForm"
import SelectInputResponsabilidades from "../components/SelectInputResponsabilidades"
import SelectInputRegimanes from "../components/SelectInputRegimanes"
import SelectInputActive from "../components/SelectInputActive"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { useModifyTercero } from "../hooks/useModifyTercero"

// import { useEffect } from "react"
const EditarTerceroPage = () => {
    const { nit } = useParams()
    const navigation = useNavigate()
    const { register, handleSubmit, setValue } = useForm<TerceroForm>()
    const { Error, Loading, ModificarTercero } = useModifyTercero({ nit: parseInt(nit as string) })
    const [toggleRazonAndNobre, setToggleRazonAndNobre] = useState(false)
    const handdleToggle = () => {
        setToggleRazonAndNobre(state => !state)
        if (!toggleRazonAndNobre) {
            setValue("razon_social", "")
        } else {
            setValue("primer_apellido", "")
            setValue("segundo_apellido", "")
            setValue("primer_nombre", "")
            setValue("segundo_nombre", "")
        }
    }
    const onSubmit: SubmitHandler<TerceroForm> = (data: TerceroForm) => {

        let objet: Partial<TerceroForm> = {};
        if (toggleRazonAndNobre) {
            const { primer_apellido, primer_nombre, segundo_nombre, segundo_apellido, estado, ...d } = data;
            const keysData = Object.keys(d) as Array<keyof typeof d>;
            keysData.forEach((key) => {
                if(d[key] !== "") {
                    (objet as any)[key] = d[key];
                }
            });
            console.log(objet, "Razon_social")
            ModificarTercero({
                ...objet,
                estado: typeof estado === "string" && estado === "true" ? true : false
            })
        } else {
            const { razon_social,estado, ...d } = data;
            const keysData = Object.keys(d) as Array<keyof typeof d>;
            keysData.forEach((key) => {
                if(d[key] !== "") {
                    (objet as any)[key] = d[key];
                }
            });
            console.log(objet, "Primer_nombre")
            ModificarTercero({
                ...objet,
                estado: typeof estado === "string" && estado === "true" ? true : false
            })
        }
    };
    
    
    
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
                            {
                                toggleRazonAndNobre ? (
                                    <InputBasic className="col-span-2" type="text" id="Razon_social" placeholder="Mag Donal" label="Razon social :" register={register} registerName="razon_social" registerOptions={{ required: false }} />
                                ) : ""
                            }
                            {
                                !toggleRazonAndNobre ? (
                                    <>
                                        <InputBasic type="text" id="Primer_apellido" placeholder="Juan" label="Primer Apellido :" register={register} registerName="primer_apellido" registerOptions={{ required: false }} />
                                        <InputBasic type="text" id="Segundo_apellido" placeholder="Felipe" label="Segundo Apellido :" register={register} registerName="segundo_apellido" registerOptions={{ required: false }} />
                                        <InputBasic type="text" id="Primer_nombre" placeholder="Valbuena" label="Primer Nombre :" register={register} registerName="primer_nombre" registerOptions={{ required: false }} />
                                        <InputBasic type="text" id="Segundo_nombre" placeholder="Valderrama" label="Segundo Nombre :" register={register} registerName="segundo_nombre" registerOptions={{ required: false }} />
                                    </>
                                ) : ""
                            }
                            <InputBasic className="col-span-2" type="text" id="Direccion" placeholder="Suba Bilbao 126 # 43-54" label="Direccion :" register={register} registerName="direccion" registerOptions={{ required: false }} />
                            <InputBasic type="number" id="Telefono_1" placeholder="##########" label="Telefono 1 :" register={register} registerName="telefono" registerOptions={{ required: false }} />
                            <InputBasic type="number" id="Telefono_2" placeholder="##########" label="Telefono 2 :" register={register} registerName="telefono_movil" registerOptions={{ required: false }} />
                            <SearchInputUbicacion className="col-span-2" label="Ubicacion - Departamento/Municipio :" setValue={setValue} />
                            <InputBasic className={toggleRazonAndNobre ? 'col-span-4' : 'col-span-2'} type="email" id="Correo" placeholder="ejemplecoreo@gmail.com" label="Correo electronico :" register={register} registerName="correo" registerOptions={{ required: false }} />
                            <SearchInputActividadEconomica label="Actividad economica :" className="col-span-4" setValue={setValue} />
                            <SelectInputResponsabilidades register={register} registerName="responsabilidades" registerOptions={{ required: false }} />
                            <SelectInputRegimanes register={register} registerName="regimenes" registerOptions={{ required: false }} />
                            <SelectInputActive register={register} registerName="estado" registerOptions={{ required: false }} />
                            <div>
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Modificar Tercero
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

export default EditarTerceroPage