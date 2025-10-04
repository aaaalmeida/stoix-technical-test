import type { ITask } from "../../types/ITask"
import "./style.css"
import PositiveIcon from "./positiveIcon.svg"
import NegativeIcon from "./negativeIcon.svg"

interface ITaskTableProps {
    tasks: ITask[]
    onToggle: (task: ITask) => Promise<void>
    onUpdate: (task: ITask) => void
    onDelete: (id: string) => void
}

export const TaskTable = ({ tasks, onToggle, onUpdate, onDelete }: ITaskTableProps) => {
    const handleChange = (task: ITask, field: keyof ITask, value: string) => {
        onUpdate({ ...task, [field]: value })
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ATIVIDADE</th>
                        <th>COMPLETADA</th>
                        <th>DESCRIÇÃO</th>
                        <th>APAGAR TAREFA?</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) =>
                        <tr key={"tr-" + index}>
                            <th>
                                <input
                                    value={task.taskname}
                                    onChange={(e) => handleChange(task, "taskname", e.target.value)}
                                    onBlur={() => onUpdate(task)} />
                            </th>
                            <th>
                                <button onClick={() => onToggle(task)}>
                                    <img src={task.completed ? PositiveIcon : NegativeIcon} />
                                </button>
                            </th>
                            <th>
                                <input
                                    value={task.description}
                                    onChange={(e) => handleChange(task, "description", e.target.value)}
                                    onBlur={() => onUpdate(task)} />
                            </th>
                            <th>
                                <button onClick={() => onDelete(task.id)}>
                                    X
                                </button>
                            </th>
                        </tr >
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row" colSpan={2}>TAREFAS COMPLETAS</th>
                        <th>{tasks.filter(task => task.completed).length}</th>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
