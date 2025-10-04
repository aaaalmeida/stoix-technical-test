import type { AxiosResponse } from "axios"
import { api } from "../api/http"
import type { ITask } from "../types/ITask"

export async function getAllTasks(token: string): Promise<AxiosResponse<ITask[]>> {
    const res = await api.get("/task", {
        headers: { Authorization: `Bearer ${token}` }
    })
    return res
}

export async function getTaskById(token: string, id: string): Promise<AxiosResponse<ITask>> {
    const res = await api.get(`/task/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return res
}

export async function deleteTaskById(token: string, id: string): Promise<AxiosResponse<void>> {
    const res = await api.delete(`/task/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return res
}

export async function createTask(token: string, data: Omit<ITask, "id">): Promise<AxiosResponse<ITask>> {
    const res = await api.post("/task", data, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return res
}

export async function updateTask(token: string, id: string, data: Omit<ITask, "id">): Promise<AxiosResponse<ITask>> {
    const res = await api.patch(`/task/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return res
}
