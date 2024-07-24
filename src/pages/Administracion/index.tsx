import { Link } from "react-router-dom"
import ContainerLayout from "../../layouts/ContainerLayout"
import MainLayout from "../../layouts/MainLayout"

const AdministracionPage = () => {
  return (
    <MainLayout>
      <main>
        <ContainerLayout>
          <nav className="grid grid-cols-4 gap-4 mt-6">
            <Link to={'/administracion/terceros'} className="flex shadow shadow-slate-500 hover:shadow-2xl hover:shadow-slate-950 items-center p-2">
              <img src="/imgs/Letra_TN.png" alt="letra T" className="w-12 ml-2 aspect-square" />
              <span className="text-lg font-semibold">Terceros</span>
            </Link>
            <Link to={'/administracion/empresas'} className="flex shadow shadow-slate-500 hover:shadow-2xl hover:shadow-slate-950 items-center p-2">
              <img src="/imgs/Letra_EN.png" alt="letra N" className="w-12 ml-2 aspect-square" />
              <span className="text-lg font-semibold">Empresas</span>
            </Link>
          </nav>
        </ContainerLayout>
      </main>
    </MainLayout>
  )
}

export default AdministracionPage