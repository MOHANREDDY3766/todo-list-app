import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <li>
      <div>
        <input type="checkbox" checked={task.completed} onChange={handleComplete} />
        <span onClick={toggleExpand}>{task.title}</span>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
      {isExpanded && (
        <div>
          <p>{task.description}</p>
          <small>Last updated: {new Date(task.updatedAt).toLocaleString()}</small>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
