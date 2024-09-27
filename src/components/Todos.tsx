import React, { useContext } from "react";
import TodoItem from "./TodoItem";

import classes from './Todos.module.css';
import { TodosContext } from "../store/todos-context";

interface TodosProps {
    children?: React.ReactNode;
}

const Todos: React.FC<TodosProps> = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <>
            <ul className={classes.todos}>
                {todosCtx.items.map(item =>
                    <TodoItem key={item.text} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
                    // <TodoItem key={item.text} text={item.text} onRemoveTodo={() => onRemoveTodo(item.id)} /> // ok aussi
                )}
            </ul>
            {/* {children} */}
        </>
    );
};

export default Todos;