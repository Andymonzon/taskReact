import axios from "axios"

export const getDataRequest = async () =>
    await axios.get("http://localhost:3000/api/todolist")

export const getOnlyDataRequest = async (id) =>
    await axios.get(`http://localhost:3000/api/todolist/${id}`)

export const createDataRequest = async (data) =>
    await axios.post("http://localhost:3000/api/todolist", data)

export const deleteDataRequest = async (id) =>
    await axios.delete(`http://localhost:3000/api/todolist/${id}`)

export const updateDataRequest = async (id, data) =>
    await axios.put(`http://localhost:3000/api/todolist/${id}`, data)

export const doneDataRequest = async (id, done) =>
    await axios.put(`http://localhost:3000/api/todolist/${id}`, {done})