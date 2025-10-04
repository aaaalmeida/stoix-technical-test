import type { AxiosResponse } from "axios"
import { api } from "../api/http"
import type { ITask } from "../types/ITask"

export async function getAllTasks(): Promise<AxiosResponse<ITask[]>> {
    return await api.get("/task", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
}

export async function getTaskById(id: string): Promise<AxiosResponse<ITask>> {
    return await api.get(`/task/${id}`)
}

export async function deleteTaskById(id: string): Promise<AxiosResponse<void>> {
    return await api.delete(`/task/${id}`)
}

export async function createTask(data: Omit<ITask, "id">): Promise<AxiosResponse<ITask>> {
    return await api.post("/task", data)
}

export async function updateTask(id: string, data: Omit<ITask, "id">): Promise<AxiosResponse<ITask>> {
    return await api.patch(`/task/${id}`, data)
}

export async function login(username: string, password: string): Promise<AxiosResponse> {
    return await api.post("auth/login", {
        username,
        password
    })
}