import MainLayout from "@common/layouts/MainLayout"
import MainTable from "@common/components/Tables/MainTable"
import MainTableHeader from "@common/components/Tables/MainTableHeader"
import { useTercerosPage } from "../hooks/useTercerosPage"
import ContainerFullLayout from "@common/layouts/ContainerFullLayout"
const TercerosPage = () => {
    const { columns, data, isError, isLoading, pagination, setColumnsStore, haddleSearch, handdleEdit:Edit } = useTercerosPage()
    const TableData = data?.map((tercero) => ({...tercero, idTable: tercero.nit.toString()}))
    const handdleEdit = (id: string) => {
        console.log('Edit', id)
    }
    const haddleDelete = (id: string) => {
        console.log('Delete', id)
    }
    return (
        <MainLayout>
            <main>
                <ContainerFullLayout>
                    <h1 className="text-2xl font-semibold mt-4">Administracion terceros</h1>
                    <section className="mt-6">
                        <MainTableHeader columns={columns} setColumns={setColumnsStore} haddleSearch={haddleSearch} />
                        <MainTable data={TableData} error={isError} loading={isLoading} haddleEdit={handdleEdit} haddeDelete={haddleDelete} name="terceros" pagination={pagination} columns={columns} />
                    </section>
                </ContainerFullLayout>
            </main>
        </MainLayout>
    )
}

export default TercerosPage