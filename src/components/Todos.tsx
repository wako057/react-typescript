import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from './Todos.module.css';

interface TodosProps {
    children?: React.ReactNode;
    items: Todo[]
}

const Todos: React.FC<TodosProps> = ({items, children}) => {

    return (
        <>
            <ul className={classes.todos}>
                {items.map(item => 
                    <TodoItem key={item.text} text={item.text}/>
                )}
            </ul>
            {children}
        </>
    );
};

export default Todos;