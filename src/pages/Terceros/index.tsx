import MainLayout from "../../layouts/MainLayout"
import ContainerLayout from "../../layouts/ContainerLayout"
import MainTable from "../../components/Table/MainTable"
import { useTerceros } from "../../hooks/useTerceros"
import CreateTerceroForm from "../../components/Form/CreateTerceroForm"
import { useState } from "react"
const TercerosPage = () => {
  const { data, isLoading, isError } = useTerceros()
  const [formModal, setFormModal] = useState(false)
  const toggleFormModal = () => setFormModal(!formModal)
  return (
    <MainLayout>
      <main>
        <ContainerLayout>
          <h1 className="text-2xl font-semibold mt-4">Administracion terceros</h1>
          <CreateTerceroForm modal={formModal} toggleModal={toggleFormModal} />
          <section className="mt-6">
            {
              isLoading ? <p>Cargando...</p> : isError ? <p>Ocurrio un error</p> : <MainTable data={data?.data} />
            }
          </section>
          <button onClick={toggleFormModal} className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Crear tercero
            </span>
          </button>
        </ContainerLayout>
      </main>
    </MainLayout>
  )
}

export default TercerosPage