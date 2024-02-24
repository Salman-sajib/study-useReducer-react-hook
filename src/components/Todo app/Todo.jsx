import React from 'react';

function Todo({ todo }) {
  return (
    <div>
      <span style={{ color: todo.completed ? '#AAA' : '#000' }}>
        {' '}
        {todo.name}{' '}
      </span>
      <button>Toggle</button>
      <button>Delete</button>
    </div>
  );
}

export default Todo;
