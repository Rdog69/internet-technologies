import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a new task" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
