import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetail from './components/TaskDetail';

interface Task {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [selectedTask, setSelectedTask] = React.useState<Task | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React!
        </p>
        <TaskList tasks={tasks} setTasks={setTasks} setSelectedTask={setSelectedTask} />
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TaskDetail task={selectedTask} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
