import './App.css';
import Todoapp from './components/Todo app/Todoapp';
import Counter from './components/counter/Counter';

function App() {
  return (
    <>
      <h1 style={{ color: 'hsl(223, 96%, 56%)' }}>Counter</h1>
      <Counter />

      <h1>ToDo App</h1>
      <Todoapp />
    </>
  );
}

export default App;
