import MainLayout from "../../layouts/MainLayout"
import ContainerLayout from "../../layouts/ContainerLayout"
import ColorCard from "../../components/Colores/ColorCard"
const Colores = () => {
  return (
    <MainLayout>
      <main>
        <ContainerLayout>
          <h1 className="text-2xl font-semibold">Colores Empresariales</h1>
          <section className="grid grid-cols-4 gap-2 mt-8">
            <ColorCard title="Verde Principal" description="Color principal de la marca" hexa="#008594" />
            <ColorCard title="Negro principal" description="Negro principal de la marca" hexa="#242d3d" />
            <ColorCard title="Rojo principal" description="Rojo principal de la marca" hexa="#f03f37" />
          </section>
        </ContainerLayout>
      </main>
    </MainLayout>
  )
}

export default Colores