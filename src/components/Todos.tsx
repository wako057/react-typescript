import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

interface TodosProps {
    children?: React.ReactNode;
    items: Todo[]
}

const Todos: React.FC<TodosProps> = ({items, children}) => {

    return (
        <>
            <ul>
                {items.map(item => 
                    <TodoItem key={item.text} text={item.text}/>
                )}
            </ul>
            {children}
        </>
    );
};

export default Todos;