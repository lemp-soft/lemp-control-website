import { Link } from "react-router-dom"
const TopBar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-md shadow-slate-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={'/administracion'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/imgs/Logo.png" className="h-8" alt="Lemp logo" />
                </Link>
                <div className="flex items-center space-x-3 rtl:space-x-reverse gap-4">
                    <Link to={'/administracion'} className="text-gray-900 dark:text-gray-100 font-medium rounded-md p-2 border hover:text-lime-800 hover:bg-lime-100 hover:border-lime-800">Administracion</Link>
                    <Link to={'/recursos/colores'} className="text-gray-900 dark:text-gray-100 font-medium rounded-md p-2 border hover:text-lime-800 hover:bg-lime-100 hover:border-lime-800">Recursos</Link>
                    <Link to={'/iniciar'} className="text-gray-900 dark:text-gray-100 font-medium rounded-md p-2 border hover:text-lime-800 hover:bg-lime-100 hover:border-lime-800">Iniciar</Link>
                </div>
            </div>
        </nav>

    )
}

export default TopBar