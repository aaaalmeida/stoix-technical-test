import { useEffect, useState } from "react"
import type { ITask } from "../../types/ITask"
import { createTask, getAllTasks, updateTask } from "../../service/taskService"
import { TaskForm } from "../../components/task.form"
import { TaskTable } from "../../components/task.table"
import "./style.css"
import { toast } from "react-toastify"
import { isPositiveStatusCode } from "../../utils/isPositiveStatusCode"


export const TaskPage = () => {
    const [tasks, setTasks] = useState<ITask[]>([])
    const token = localStorage.getItem("token") || ""

    useEffect(() => {
        const fetchData = async () => {
            getAllTasks(token)
                .then(res => {
                    if (isPositiveStatusCode(res.status)) setTasks(res.data)
                    else toast("Não foi possivel carregar as tarefas :(")
                })
        }

        fetchData()
    }, [token])

    const toggleTask = async (task: ITask) => {
        const updated = { ...task, completed: !task.completed }
        const res = await updateTask("", task.id, updated)

        if (isPositiveStatusCode(res.status)) {
            setTasks(prev =>
                prev.map(t => (t.id === task.id ? updated : t))
            )
        } else toast("Não foi possível atualizar a tarefa :(")
    }

    async function handleAdd(taskname: string, description?: string) {
        const res = await createTask("", {
            taskname,
            completed: false,
            description,
        })
        if (isPositiveStatusCode(res.status)) setTasks((prev) => [...prev, res.data])
        else toast("Não foi possivel adicionar uma tarefa\n")
    }

    return (
        <div id="task-page">
            <h2>Lista de Tarefas</h2>
            <TaskForm onSubmit={handleAdd} />
            <TaskTable tasks={tasks} onToggle={toggleTask} />
        </div>
    )
}
