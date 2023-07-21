import React from 'react';
import { render } from '@testing-library/react';
import TaskDetail from '../components/TaskDetail';

test('renders the TaskDetail component', () => {
  render(<TaskDetail task={null} />);
});

test('displays the task details', () => {
  const task = { id: 1, title: 'Task 1', description: 'Description 1' };
  const { getByText } = render(<TaskDetail task={task} />);

  expect(getByText('Task 1')).toBeInTheDocument();
  expect(getByText('Description 1')).toBeInTheDocument();
});

test('displays a message when no task is selected', () => {
  const { getByText } = render(<TaskDetail task={null} />);

  expect(getByText('No task selected.')).toBeInTheDocument();
});
