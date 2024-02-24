import './App.css';
import Todoapp from './components/Todo app/Todoapp';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className='App'>
      <h1 style={{ color: 'hsl(180, 100%, 92%)' }}>Counter</h1>
      <Counter />
      <hr />
      <h1>ToDo App</h1>
      <Todoapp />
    </div>
  );
}

export default App;
