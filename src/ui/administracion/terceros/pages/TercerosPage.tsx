import { useEffect } from "react"
import ContainerLayout from "../../../../layouts/ContainerLayout"
import MainLayout from "../../../../layouts/MainLayout"
import { useTerceros } from "../hooks/useTerceros"
import MainTable from "../../../common/components/Tables/MainTable"
import { PropsPaginationMainTable } from "../../../common/components/Paginations/PaginationMainTable"
import { useNavigate } from "react-router-dom"
const TercerosPage = () => {
    const { data, isError, isLoading } = useTerceros({
        elementosPorPagina: 10
    })
    const navigate = useNavigate()
    const handdleEdit = (id: string) => {
        navigate(`/administracion/terceros/${id}`)
    }
    const haddlePage = (page: number) => {
        console.log(page)
    }
    const pagination: PropsPaginationMainTable = {
        max_pages: 1,
        actual_page: 1,
        haddlePage
    }
    return (
        <MainLayout>
            <main>
                <ContainerLayout>
                    <h1 className="text-2xl font-semibold mt-4">Administracion terceros</h1>
                    <MainTable data={data} error={isError} loading={isLoading} haddleEdit={handdleEdit} name="terceros" pagination={pagination} />
                </ContainerLayout>
            </main>
        </MainLayout>
    )
}

export default TercerosPage