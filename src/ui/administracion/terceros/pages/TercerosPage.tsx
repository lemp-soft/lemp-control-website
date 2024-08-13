import MainLayout from "@common/layouts/MainLayout"
import MainTable from "@common/components/Tables/MainTable"
import MainTableHeader from "@common/components/Tables/MainTableHeader"
import { useTercerosPage } from "../hooks/useTercerosPage"
import ContainerFullLayout from "@common/layouts/ContainerFullLayout"
const TercerosPage = () => {
    const { columns, data, isError, isLoading, pagination, setColumnsStore, haddleSearch, handdleEdit } = useTercerosPage()
    return (
        <MainLayout>
            <main>
                <ContainerFullLayout>
                    <h1 className="text-2xl font-semibold mt-4">Administracion terceros</h1>
                    <section className="mt-6">
                        <MainTableHeader columns={columns} setColumns={setColumnsStore} haddleSearch={haddleSearch} />
                        <MainTable data={data} error={isError} loading={isLoading} haddleEdit={handdleEdit} name="terceros" pagination={pagination} columns={columns} />
                    </section>
                </ContainerFullLayout>
            </main>
        </MainLayout>
    )
}

export default TercerosPage