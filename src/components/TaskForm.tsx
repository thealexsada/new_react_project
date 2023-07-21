import './TaskForm.css';
import React from 'react';
import axios from 'axios';


interface Task {
  id: number;
  title: string;
  description: string;
}

interface TaskFormProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskForm: React.FC<TaskFormProps> = ({ tasks, setTasks }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Perform form submission logic, e.g., create a new task
    const newTask = { id: tasks.length + 1, title, description };
    setTasks([...tasks, newTask]);

    // Reset form input values
    setTitle('');
    setDescription('');
  };

  return (
    <div className="task-form">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} rows={4} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default TaskForm;