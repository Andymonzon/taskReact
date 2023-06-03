import { createContext, useContext, useState } from "react";
import { deleteDataRequest, doneDataRequest, getDataRequest, getOnlyDataRequest, updateDataRequest } from "../api/todolist.api"

const TodoListContext = createContext()

export const useTodoList = () => {
    const context = useContext(TodoListContext)
    if (!context)
        throw new Error("useTodoList debería esta dentro de TodoListProvider")
    return context
}

export const TodoListContextProvider = ({ children }) => {

    const [tasks, setTasks] = useState([])

    const getData = async () => {
        try {
            const response = await getDataRequest()
            setTasks(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getOnlyData = async (id) => {
        try {
            const response = await getOnlyDataRequest(id)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const deleteData = async (id) => {
        try {
            const response = await deleteDataRequest(id)
            console.log(response)
            setTasks(tasks.filter(task => task.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const updateData = async (id, data) => {
        try {
            const response = await updateDataRequest(id, data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const doneData = async (id) => {
        try {
            const taskFound = tasks.find(task => task.id === id)
            await doneDataRequest(id, taskFound.done === 0 ? 1 : 0)
            tasks.map(task => task.id === id ? task.done = task.done === 0 ? 1 : 0 : task.done)
            setTasks([...tasks])
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TodoListContext.Provider value={{ getData, tasks, deleteData, updateData, getOnlyData, doneData }}>
            {children}
        </TodoListContext.Provider>
    )
}