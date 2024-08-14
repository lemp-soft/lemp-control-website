import ContainerFullLayout from "@common/layouts/ContainerFullLayout"
import MainLayout from "@common/layouts/MainLayout"
import { useEmpresas } from "../hooks/useEmpresas"
import { useEffect } from "react"
import MainTableHeader from "@ui/common/components/Tables/MainTableHeader"
import MainTable from "@ui/common/components/Tables/MainTable"
import { useCheckboxTable } from "@shared/state/checkTableStore"
import { useNavigate } from "react-router-dom"
import { useEliminarEmpresas } from "../hooks/useEliminarEmpresas"

const EmpresasPage = () => {
    const { DataEmpresas, LoadingEmpresas, ErrorEmpresas, setCurrentPage, setSearch } = useEmpresas({ elementosPorPagina: 5 })
    const { DeleteEmpresa } = useEliminarEmpresas()
    const TableData = DataEmpresas?.map((empresas) => ({ ...empresas, idTable: empresas.codigo.toString() }))
    const { columns, setColumnsStore, compare } = useCheckboxTable("empresas")
    const navigate = useNavigate()
    const handdleEdit = (id: string) => {
        navigate(`/administracion/terceros/${id}/editar`)
    }
    const handdleClickOnRow = (id: string) => {
        navigate(`/administracion/terceros/${id}`)
    }
    const haddlePage = (page: number) => {
        setCurrentPage(page)
    }
    const haddleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const handdleDeleteTercero = (nit: string) => {
        if (globalThis.confirm('¿Estas seguro de eliminar el tercero?')) {
            DeleteEmpresa(nit)
        }
    }
    const pagination = {
        max_pages: 1,
        actual_page: 1,
        haddlePage
    }
    useEffect(() => {
        if (TableData) {
            const columnsObject = Object.keys(TableData[0] as object).map((name) => ({ name, active: true }))
            compare(columnsObject)
        }
    }, [TableData])
    return (
        <MainLayout>
            <main>
                <ContainerFullLayout>
                    <h1 className="text-2xl font-semibold mt-4">Administracion Empresas</h1>
                    <section className="mt-6">
                        <MainTableHeader columns={columns} setColumns={setColumnsStore} haddleSearch={haddleSearch} />
                        <MainTable data={TableData} error={ErrorEmpresas} loading={LoadingEmpresas} haddleEdit={handdleEdit} haddeDelete={handdleDeleteTercero} name="terceros" pagination={pagination} columns={columns} handdleClickOnRow={handdleClickOnRow} />
                    </section>
                </ContainerFullLayout>
            </main>
        </MainLayout>
    )
}

export default EmpresasPage