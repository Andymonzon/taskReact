import { useEffect } from "react"
import { TodoListCard } from "../components/TodoListCard"
import { useTodoList } from "../context/TodoListContext"

const TodoListHome = () => {

    const { getData, tasks } = useTodoList()

    useEffect(() => {
        getData()
    }, [])

    const renderTask = () => {
        if (tasks.length === 0)
            return <div><h2 className="text-3xl">Sin tareas</h2></div>

        return tasks.map(task => (
            <TodoListCard task={task} key={task.id} />
        ))
    }

    return (
        <div>
            <h1 className="text-4xl my-5 font-bold">Mis tareas</h1>

            <div className="grid grid-cols-3 gap-3">
                {renderTask()}
            </div>
        </div>
    )
}

export { TodoListHome }