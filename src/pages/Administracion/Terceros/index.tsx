import MainLayout from "../../../layouts/MainLayout"
import ContainerLayout from "../../../layouts/ContainerLayout"
import MainTable from "../../../components/Table/MainTable"
import MainTableHeader from "../../../components/Table/MainTableHeader"
import { useTerceros } from "../../../hooks/terceros"
import { useDebouncedCallback } from "use-debounce"
import { useCheckboxTable } from "../../../hooks/useCheckboxTable"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const TercerosPage = () => {
  const { data, isLoading, isError, setSearch, setCurrentPage } = useTerceros({
    elementosPorPagina: 10
  })
  const { column, setColumnsStore, compare } = useCheckboxTable("terceros")
  const navigate = useNavigate()
  useEffect(() => {
    if (data?.data) {
      const columnsObject = Object.keys(data?.data[0] as object).map((name) => ({ name, active: true }))
      compare(columnsObject)
    }
  }, [data])

  const haddlePage = (page: number) => {
    setCurrentPage(page)
  }
  const haddleSearchDebounce = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, 500)
  const handdleEdit = (id: string) => {
    navigate(`/administracion/terceros/${id}`)
  }
  const pagination = {
    max_pages: data?.max_pages,
    actual_page: Number(data?.pagina),
    haddlePage: haddlePage
  }
  return (
    <MainLayout>
      <main>
        <ContainerLayout>
          <h1 className="text-2xl font-semibold mt-4">Administracion terceros</h1>
          <section className="mt-6">
            <MainTableHeader columns={column} setColumns={setColumnsStore} haddleSearch={haddleSearchDebounce} />
            <MainTable data={data?.data} error={isError} loading={isLoading} name="terceros" pagination={pagination} haddleEdit={handdleEdit} />
          </section>
        </ContainerLayout>
      </main>
    </MainLayout>
  )
}

export default TercerosPage