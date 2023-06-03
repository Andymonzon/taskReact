import axios from "axios"

export const getDataRequest = async () =>
    await axios.get("https://tasks-api-production-63dd.up.railway.app/api/todolist")

export const getOnlyDataRequest = async (id) =>
    await axios.get(`https://tasks-api-production-63dd.up.railway.app/api/todolist/${id}`)

export const createDataRequest = async (data) =>
    await axios.post("https://tasks-api-production-63dd.up.railway.app/api/todolist", data)

export const deleteDataRequest = async (id) =>
    await axios.delete(`https://tasks-api-production-63dd.up.railway.app/api/todolist/${id}`)

export const updateDataRequest = async (id, data) =>
    await axios.put(`https://tasks-api-production-63dd.up.railway.app/api/todolist/${id}`, data)

export const doneDataRequest = async (id, done) =>
    await axios.put(`https://tasks-api-production-63dd.up.railway.app/api/todolist/${id}`, {done})