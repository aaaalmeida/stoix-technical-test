import type { ITask } from "../../types/ITask"
import "./style.css"
import PositiveIcon from "./positiveIcon.svg"
import NegativeIcon from "./negativeIcon.svg"

interface ITaskTableProps {
    tasks: ITask[]
    onToggle: (task: ITask) => Promise<void>
}

export function TaskTable({ tasks, onToggle }: ITaskTableProps) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ATIVIDADE</th>
                        <th>COMPLETADA</th>
                        <th>DESCRIÇÃO</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) =>
                        <tr key={"tr-" + index}>
                            <th>{task.taskname}</th>
                            <th>
                                <button onClick={() => onToggle(task)}>
                                    <img src={task.completed ? PositiveIcon : NegativeIcon} />
                                </button>
                            </th>
                            <th>{task.description}</th>
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
