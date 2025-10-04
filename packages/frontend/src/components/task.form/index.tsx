import { useState } from "react";
import "./style.css"

interface ITaskFormProps {
  onSubmit: (taskname: string, description?: string) => void;
}

export const TaskForm = ({ onSubmit }: ITaskFormProps) => {
  const [taskname, setTaskname] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(taskname, description);
    setTaskname("");
    setDescription("");
  }

  return (
    <form id="task-form" onSubmit={handleSubmit}>
      <input
        value={taskname}
        onChange={(e) => setTaskname(e.target.value)}
        placeholder="Nome da tarefa"
        required
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição (opcional)"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
