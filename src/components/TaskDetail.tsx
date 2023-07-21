import './TaskDetail.css';
import React from 'react';
import axios from 'axios';


interface Task {
  id: number;
  title: string;
  description: string;
}

interface TaskDetailProps {
  task: Task | null;
}

const TaskDetail: React.FC<TaskDetailProps> = ({ task }) => {
  return (
    <div className="task-detail">
      {task ? (
        <>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </>
      ) : (
        <p>No task selected</p>
      )}
    </div>
  );
};

export default TaskDetail;
