
import Todos from './components/Todo';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Lean Typescript'),
  ];
  return (
    <div className="App">
      <Todos items={todos}>
        <ul>
          <li>blublu</li>
          <li>blibli</li>
        </ul>
      </Todos>
    </div>
  );
}

export default App;
