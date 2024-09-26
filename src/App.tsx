
import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todos);
  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Lean Typescript'),
  // ];

  function addTodoHandler (text: string) {
    const updatedTodos = [...todos, new Todo(text)];

    setTodos(updatedTodos);
  }
  
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
      </div>
  );
}

export default App;
