import TaskForm from './TaskForm';
import './TaskList.css';
import React, { useEffect } from 'react';
import axios from 'axios';

interface Task {
  id: number;
  title: string;
  description: string;
}

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks, setSelectedTask }) => {
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      const tasks = response.data;
      setTasks(tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const createTask = async () => {
    try {
      const response = await axios.post('/api/tasks', {
        title: 'New Task',
        description: 'This is a new task',
      });
      const newTask = response.data;
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const updateTask = async (task: Task) => {
    try {
      const response = await axios.put(`/api/tasks/${task.id}`, {
        ...task,
        title: 'Updated Task',
      });
      const updatedTask = response.data;
      setTasks((prevTasks) =>
        prevTasks.map((prevTask) => (prevTask.id === updatedTask.id ? updatedTask : prevTask))
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      await axios.delete(`/api/tasks/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <button onClick={createTask}>Create Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => setSelectedTask(task)}>
            {task.title}
            <button onClick={() => updateTask(task)}>Update</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
