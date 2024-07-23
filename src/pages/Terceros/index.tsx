interface fechedTerceros {
  data: Terceros[]
  message: string
  status: string

}
import MainLayout from "../../layouts/MainLayout"
import ContainerLayout from "../../layouts/ContainerLayout"
import { Terceros } from "../../types/terceros"
import MainTable from "../../components/Table/MainTable"
import { useTerceros } from "../../hooks/useTerceros"
import CreateTerceroForm from "../../components/Form/CreateTerceroForm"
const TercerosPage = () => {
  const { data, isLoading, isError } = useTerceros()
  return (
    <MainLayout>
      <main>
        <ContainerLayout>
          <h1 className="text-2xl font-semibold mt-4">Administracion terceros</h1>
          <CreateTerceroForm />
          <section>
            {
              isLoading ? <p>Cargando...</p> : isError ? <p>Ocurrio un error</p> : <MainTable data={data?.data} />
            }
          </section>
        </ContainerLayout>
      </main>
    </MainLayout>
  )
}

export default TercerosPage