import { useReducer } from 'react';
import './counter.css';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function reset() {
    dispatch({ type: ACTIONS.RESET });
  }

  return (
    <>
      <h1 className='count-value'>{state.count}</h1>
      <div className='buttons'>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
}

export default Counter;
