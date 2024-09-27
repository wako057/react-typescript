import { createContext } from "react";
import { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void,
};

type ContextProdiverProps = {
    children?: React.ReactNode,
};

export const TodosContext = createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
 });

 const TodosContextProvider: React.FC<ContextProdiverProps> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    console.log(todos);
  
    function addTodoHandler (text: string) {
  
      // setTodos((prevTodos) => [...prevTodos, new Todo(text)]);
      setTodos((prevTodos) => prevTodos.concat(new Todo(text)));
    }
  
    function removeTodoHandler(todoId: string) {
      setTodos((prevState) => prevState.filter(todo => todo.id !== todoId));
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,

     };    
    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
 };


 export default TodosContextProvider;