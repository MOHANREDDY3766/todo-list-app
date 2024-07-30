import React, { useState } from 'react';

const TaskForm = ({ addTask, updateTask, currentTask }) => {
  const [task, setTask] = useState(currentTask || { title: '', description: '', completed: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      updateTask(task);
    } else {
      addTask(task);
    }
    setTask({ title: '', description: '', completed: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
        required
      />
      <button type="submit">{currentTask ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
