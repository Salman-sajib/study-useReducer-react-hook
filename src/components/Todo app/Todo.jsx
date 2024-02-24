/* eslint-disable react/prop-types */
import { ACTIONS } from './Actions';
import './todo.css';

function Todo({ todo, dispatch }) {
  return (
    <div className='todo-container'>
      <span
        style={{ textDecoration: todo.completed ? 'none' : 'line-through' }}
      >
        {' '}
        {todo.name}{' '}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Complete
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
