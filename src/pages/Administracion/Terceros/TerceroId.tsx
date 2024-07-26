import { useParams } from "react-router-dom"
import { useTercero } from "../../../hooks/terceros"
import MainLayout from "../../../layouts/MainLayout"
import ContainerLayout from "../../../layouts/ContainerLayout"
import { useEffect } from "react"
const TerceroIdPage = () => {
    const {nit} = useParams()
    const {data, isLoading, isError} = useTercero(nit as string)
    useEffect(() => {
        if(isError){
            alert('Error al cargar el tercero')
        }
    }
    , [isError])
    useEffect(() => {
        if(data){
            console.log(data)
        }
    }, [data])
    if(isLoading){
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
    if(isError){
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
    if(!data){
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
            <main>
                <ContainerLayout>
                    <h1 className="font-semibold text-2xl mt-6">{data.primer_apellido} {data.segundo_apellido}</h1>
                </ContainerLayout>
            </main>
        </MainLayout>
    )
}

export default TerceroIdPage