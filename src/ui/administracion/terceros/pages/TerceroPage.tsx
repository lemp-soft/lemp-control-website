import { useNavigate, useParams } from "react-router-dom"
import { useTercero } from "../hooks/useTercero"
import MainLayout from "@ui/common/layouts/MainLayout"
import ContainerLayout from "@ui/common/layouts/ContainerLayout"
import Acordeon from "@ui/common/components/Acordeon/Acordeon"
import { Link } from "react-router-dom"
import { TerceroRepository } from "@infra/administracion/terceros/repositories/TerceroRepasitory"

const TerceroPage = () => {
    const { nit } = useParams()
    const navigate = useNavigate()
    const { dataTercero, ErrorTercero, LoadingTercero, dataEmpresa } = useTercero(Number(nit))
    const items = dataEmpresa?.map((empresa) => ({
        head: empresa.codigo.toString(),
        body: [
            `Nit : ${empresa.nit_tercero}`,
            `Estado : ${empresa.estado_empresa ? 'Activo' : 'Inactivo'}`,
            `Estado Factura Electronica : ${empresa.estado_factura_electronica ? 'Activo' : 'Inactivo'}`,
            `Manejo Decimal : ${empresa.manejo_decimal ? 'Activo' : 'Inactivo'}`,
            `Dian Token : ${empresa.dian_token}`,
            `Dian Usuario Api : ${empresa.dian_usuario_api}`,
            `Dian Contrasena Api : ${empresa.dian_contrasena_api}`,
            `Dian Codigo Compania : ${empresa.dian_codigo_compania}`,
            `Dian Creacion Token : ${String(empresa.dian_creacion_token)}`,
            `Dian Codigo de Operacion : ${empresa.dian_codigo_de_operacion}`
        ]
    }))
    if (LoadingTercero) {
        return (
            <MainLayout>
                <main>
                    <ContainerLayout>
                        <h1 className="font-semibold text-2xl mt-6">Cargando...</h1>
                    </ContainerLayout>
                </main>
            </MainLayout>
        )
    }
    const handdleDeleteTercero = () => {
        const terceroRepository = new TerceroRepository()
        if(globalThis.confirm('¿Estas seguro de eliminar el tercero?')) {
            terceroRepository.deleteTercero(Number(nit))
            navigate('/administracion/terceros')
        }
    }
    if (ErrorTercero) {
        return (
            <MainLayout>
                <main>
                    <ContainerLayout>
                        <h1 className="font-semibold text-2xl mt-6">Error al cargar el tercero</h1>
                    </ContainerLayout>
                </main>
            </MainLayout>
        )
    }
    if (!dataTercero) {
        return (
            <MainLayout>
                <main>
                    <ContainerLayout>
                        <h1 className="font-semibold text-2xl mt-6">No se encontró el tercero</h1>
                    </ContainerLayout>
                </main>
            </MainLayout>
        )
    }
    return (
        <MainLayout>
            <ContainerLayout>
                <main className="mt-6">
                    <h1 className="text-2xl font-bold">Administrador de Terceros</h1>
                    <div className="flex flex-row">
                        <section className="mt-4 w-1/2">
                            <h2 className="text-lg font-semibold mb-4">Personal data</h2>
                            <ul className="flex flex-col gap-2">
                                <li>Nit : <span className="font-medium">{dataTercero.nit}</span></li>
                                <li>Nombre : <span className="font-medium">{dataTercero.primer_nombre} {dataTercero.segundo_nombre} {dataTercero.primer_apellido} {dataTercero.segundo_apellido}</span></li>
                                <li>Razon Social : <span className="font-medium">{dataTercero.razon_social}</span></li>
                                <li>Tipo : <span className="font-medium">{dataTercero.tipo}</span></li>
                                <li>Direccion : <span className="font-medium">{dataTercero.direccion}</span></li>
                                <li>Telefono : <span className="font-medium">{dataTercero.telefono}</span></li>
                                <li>Email : <span className="font-medium">{dataTercero.correo}</span></li>
                                <li>Responzabilidad : <span className="font-medium">{dataTercero.responsabilidades}</span></li>
                                <li>Regimen : <span className="font-medium">{dataTercero.regimenes}</span></li>
                                <li>Estado : <span className="font-medium">{dataTercero.estado}</span></li>
                            </ul>
                            <Link to={`/administracion/terceros/${nit}/editar`} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mt-4">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Editar Terceros
                                </span>
                            </Link>
                            <button onClick={handdleDeleteTercero} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Eliminar Tercero
                                </span>
                            </button>
                        </section>
                        <section className="mt-4 w-1/2">
                            <h2 className="text-lg font-semibold mb-4">Empresas asociadas al Tercero</h2>
                            <Acordeon items={items ?? []} />
                        </section>
                    </div>
                </main>
            </ContainerLayout>
        </MainLayout>
    )
}

export default TerceroPage