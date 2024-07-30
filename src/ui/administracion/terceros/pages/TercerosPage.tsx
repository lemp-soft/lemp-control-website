import { useEffect } from "react"
import ContainerLayout from "../../../../layouts/ContainerLayout"
import MainLayout from "../../../../layouts/MainLayout"
import { useTerceros } from "../hooks/useTerceros"
import MainTable from "../../../common/components/Tables/MainTable"
import { PropsPaginationMainTable } from "../../../common/components/Paginations/PaginationMainTable"
import { useNavigate } from "react-router-dom"
import { useCheckboxTable } from "../../../../shared/state/checkTableStore"
import MainTableHeader from "../../../common/components/Tables/MainTableHeader"
const TercerosPage = () => {
    const { data, isError, isLoading } = useTerceros({
        elementosPorPagina: 10
    })
    const { columns, setColumnsStore, compare } = useCheckboxTable("terceros")
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
    useEffect(() => {
        if (data) {
            const columnsObject = Object.keys(data[0] as object).map((name) => ({ name, active: true }))
            compare(columnsObject)
        }
    }, [data])
    return (
        <MainLayout>
            <main>
                <ContainerLayout>
                    <h1 className="text-2xl font-semibold mt-4">Administracion terceros</h1>
                    <section className="mt-6">
                        <MainTableHeader columns={columns} setColumns={setColumnsStore} haddleSearch={(e) => console.log(e.target.value)} />
                        <MainTable data={data} error={isError} loading={isLoading} haddleEdit={handdleEdit} name="terceros" pagination={pagination} columns={columns} />
                    </section>
                </ContainerLayout>
            </main>
        </MainLayout>
    )
}

export default TercerosPage