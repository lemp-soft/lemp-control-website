import MainLayout from "../../../layouts/MainLayout"
import ContainerLayout from "../../../layouts/ContainerLayout"
import MainTable from "../../../components/Table/MainTable"
import { useTerceros } from "../../../hooks/terceros"
import CreateTerceroForm from "../../../components/Form/CreateTerceroForm"
import { useState } from "react"
import { useDebouncedCallback } from "use-debounce"
const TercerosPage = () => {
  const { data, isLoading, isError, setSearch, setCurrentPage } = useTerceros({
    elementosPorPagina: 10
  })
  const [formModal, setFormModal] = useState(false)
  const toggleFormModal = () => setFormModal(!formModal)
  const haddlePage = (page: number) => {
    setCurrentPage(page)
  }
  const haddleSearchDebounce = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
    , 500)

  return (
    <MainLayout>
      <main>
        <ContainerLayout>
          <h1 className="text-2xl font-semibold mt-4">Administracion terceros</h1>
          <CreateTerceroForm modal={formModal} toggleModal={toggleFormModal} />
          <section className="mt-6">
            <div className="mb-6">
              <input onChange={(e) => haddleSearchDebounce(e)} className="p-2 border-none rounded-2xl outline-lime-950 bg-lime-200" type="search" placeholder="Juan, Felipe,..." />
            </div>
            <MainTable data={data?.data} error={isError} loading={isLoading} name="terceros" pagination={{
              max_pages: data?.max_pages,
              actual_page: Number(data?.pagina),
              haddlePage: haddlePage
            }} />
            <button onClick={toggleFormModal} className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Salir del formulario
              </span>
            </button>
          </section>
        </ContainerLayout>
      </main>
    </MainLayout>
  )
}

export default TercerosPage