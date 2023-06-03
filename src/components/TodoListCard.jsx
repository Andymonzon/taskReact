import { useTodoList } from "../context/TodoListContext"
import { useNavigate } from 'react-router-dom'

const TodoListCard = ({ task }) => {

    const { deleteData, doneData } = useTodoList()

    const navigate = useNavigate()

    const handleDone = async () => {
        await doneData(task.id)
    }

    return (
        <div className="bg-white p-4 rounded-xl">
            <header className="flex justify-between">
                <h2 className="text-2xl text-zinc-600 font-bold">{task.title}</h2>
                <span>{task.done === 0 ? '❌' : '☑️'}</span>
            </header>
            <p className="text-sm my-2">{task.description}</p>
            <div className="flex gap-3 mt-3">
                <button className="border border-black text-black rounded px-2 py-1 font-bold" onClick={() => deleteData(task.id)}>Eliminar</button>
                <button className="border border-black text-black rounded px-2 py-1 font-bold" onClick={() => navigate(`/editTask/${task.id}`)}>Editar</button>
                <button className={task.done === 0 ? 'border border-black rounded text-red-900 px-2 py-1 font-bold' : 'border border-black text-blue-500 rounded px-2 py-1 font-bold'} onClick={() => handleDone(task.done)}>{task.done === 0 ? 'Pendiente' : 'Completada'}</button>
            </div>
        </div>
    )
}

export { TodoListCard }