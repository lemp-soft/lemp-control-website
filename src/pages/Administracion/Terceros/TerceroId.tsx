import { useParams } from "react-router-dom"
import { useTercero } from "../../../hooks/terceros"
import MainLayout from "../../../layouts/MainLayout"
import ContainerLayout from "../../../layouts/ContainerLayout"
import { useEffect } from "react"
import { Link } from "react-router-dom"
const TerceroIdPage = () => {
    const { nit } = useParams()
    const { tercero, empresa } = useTercero(nit as string)
    const { data: dataTercero, isError: ErrorTercero, isLoading: LoaddingTercero } = tercero
    const { dataEmpresa, ErrorEmpresa, LoadingEmpresa } = empresa
    useEffect(() => {
        if (dataTercero) {
            console.log(dataTercero)
        }
    }, [dataTercero])
    if (LoaddingTercero) {
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
                        </section>
                        <section className="mt-4 w-1/2">
                            <h2 className="text-lg font-semibold mb-4">Empresas asociadas al Tercero</h2>
                            <ul>
                                {
                                    dataEmpresa?.length === 0 && (
                                        <h1 className="text-4xl text-yellow-500 font-semibold">No hay empresas</h1>
                                    )
                                }
                                {
                                    dataEmpresa?.length && dataEmpresa?.length > 0 && (
                                        dataEmpresa?.map((empresa) => (
                                            <li key={empresa.codigo}>
                                                <h2>{empresa.codigo}</h2>
                                                <ul>
                                                    <li>Nit : {empresa.nit_tercero}</li>
                                                    <li>Estado : {empresa.estado_empresa ? 'Activo' : 'Inactivo'}</li>
                                                    <li>Estado Factura Electronica : {empresa.estado_factura_electronica ? 'Activo' : 'Inactivo'}</li>
                                                    <li>Manejo Decimal : {empresa.manejo_decimal ? 'Activo' : 'Inactivo'}</li>
                                                    <li>Dian Token : {empresa.dian_token}</li>
                                                    <li>Dian Usuario Api : {empresa.dian_usuario_api}</li>
                                                    <li>Dian Contrasena Api : {empresa.dian_contrasena_api}</li>
                                                    <li>Dian Codigo Compania : {empresa.dian_codigo_compania}</li>
                                                    <li>Dian Creacion Token : {empresa.dian_creacion_token}</li>
                                                    <li>Dian Codigo de Operacion : {empresa.dian_codigo_de_operacion}</li>
                                                </ul>
                                            </li>
                                        ))
                                    )
                                }
                            </ul>
                        </section>
                    </div>
                </main>
            </ContainerLayout>
        </MainLayout>
    )
}

export default TerceroIdPage