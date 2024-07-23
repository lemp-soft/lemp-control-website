import ContainerLayout from "../../layouts/ContainerLayout"
import MainLayout from "../../layouts/MainLayout"
import MainTable from "../../components/Table/MainTable"
import { useEmpresas } from "../../hooks/useEmpresas"
const Empresas = () => {
    const { data, isLoading, isError } = useEmpresas()
    return (
        <MainLayout>
            <main>
                <ContainerLayout>
                    <h1 className="font-semibold text-2xl mt-6">Empresas</h1>
                    <section className="mt-6">
                        {
                            isLoading ? <p>Cargando...</p> : isError ? <p>Ocurrio un error</p> : <MainTable data={data?.data} />
                        }
                    </section>
                </ContainerLayout>
            </main>
        </MainLayout>
    )
}

export default Empresas