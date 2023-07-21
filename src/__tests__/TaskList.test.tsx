import React from 'react';
import { render } from '@testing-library/react';
import TaskList from '../components/TaskList';

test('renders the TaskList component', () => {
  render(<TaskList tasks={[]} setTasks={() => {}} setSelectedTask={() => {}} />);
});

test('displays tasks in the list', () => {
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Description 1' },
    { id: 2, title: 'Task 2', description: 'Description 2' },
  ];
  const { getByText } = render(
    <TaskList tasks={tasks} setTasks={() => {}} setSelectedTask={() => {}} />
  );

  expect(getByText('Task 1')).toBeInTheDocument();
  expect(getByText('Task 2')).toBeInTheDocument();
});

test('selects a task when clicked', () => {
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Description 1' },
    { id: 2, title: 'Task 2', description: 'Description 2' },
  ];
  const setSelectedTask = jest.fn();
  const { getByText } = render(
    <TaskList tasks={tasks} setTasks={() => {}} setSelectedTask={setSelectedTask} />
  );

  getByText('Task 1').click();
  expect(setSelectedTask).toHaveBeenCalledWith(tasks[0]);

  getByText('Task 2').click();
  expect(setSelectedTask).toHaveBeenCalledWith(tasks[1]);
});
