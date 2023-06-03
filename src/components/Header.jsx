import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <div className="flex items-center font-bold justify-between py-4 px-16 bg-blue-500 text-white">
                <h1 className="text-2xl">Lista de tareas</h1>
                <nav>
                    <ul className="flex gap-1">
                        <li>
                            <Link className="p-2 hover:text-zinc-300" to='/'>Inicio</Link>
                        </li>
                        <li>
                            <Link className="p-2 hover:text-zinc-300" to='/createTask'>Crear tarea</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export { Header }