import { useEffect } from "react"
import { useParams } from "react-router-dom"
import MainLayout from "../../../layouts/MainLayout"
import ContainerLayout from "../../../layouts/ContainerLayout"
const TerceroIdPage = () => {
    const {nit} = useParams()
    return (
        <MainLayout>
            <main>
                <ContainerLayout>
                    <h1 className="font-semibold text-2xl mt-6">Tercero - {nit}</h1>
                </ContainerLayout>
            </main>
        </MainLayout>
    )
}

export default TerceroIdPage