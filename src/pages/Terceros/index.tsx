import MainLayout from "../../layouts/MainLayout"
import ContainerLayout from "../../layouts/ContainerLayout"
import { useEffect, useState } from "react"
import { getTerceros } from "../../services/getTerceros"
import { getTiposTerceros } from "../../services/getTiposTerceros"
import { Terceros } from "../../types/terceros"
import CreateTerceroForm from "../../components/Form/CreateTerceroForm"
import MainTable from "../../components/Table/MainTable"
const TercerosPage = () => {
  const [terceros, setTerceros] = useState<Terceros[] | undefined>(undefined)
  useEffect(() => {
    const Terceros = getTerceros().then(data => {
      setTerceros(data)
    })
  }, [])

  return (
    <MainLayout>
      <main>
        <ContainerLayout>
          <h1 className="text-2xl font-semibold mt-4">Administracion terceros</h1>
          <div  id="crud-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">

          </div>

          <CreateTerceroForm />
          <section>
            <MainTable 
              data={terceros ? terceros : []}
            />
          </section>
        </ContainerLayout>
      </main>
    </MainLayout>
  )
}

export default TercerosPage