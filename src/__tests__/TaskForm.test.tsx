import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';


test('renders the TaskForm component', () => {
  render(<TaskForm />);
});


test('submits the form', () => {
  const { getByLabelText, getByText } = render(<TaskForm />);
  const titleInput = getByLabelText('Title');
  const createButton = getByText('Create');

  fireEvent.change(titleInput, { target: { value: 'New Task' } });
  fireEvent.click(createButton);

  // Assert the expected behavior after form submission
  // For example, check if the task is created and displayed on the task list
});