import React from 'react';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => toggleTaskCompletion(index)}>
            {task.isCompleted ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
