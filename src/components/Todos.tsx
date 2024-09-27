import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from './Todos.module.css';

interface TodosProps {
    children?: React.ReactNode;
    items: Todo[],
    onRemoveTodo: (id: string) => void
}

const Todos: React.FC<TodosProps> = ({ items, children, onRemoveTodo }) => {
    return (
        <>
            <ul className={classes.todos}>
                {items.map(item =>
                    <TodoItem key={item.text} text={item.text} onRemoveTodo={onRemoveTodo.bind(null, item.id)} />
                    // <TodoItem key={item.text} text={item.text} onRemoveTodo={() => onRemoveTodo(item.id)} /> // ok aussi
                )}
            </ul>
            {children}
        </>
    );
};

export default Todos;