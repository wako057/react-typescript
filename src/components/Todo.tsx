import React from "react";
import Todo from "../models/todo";

interface Props {
    children?: React.ReactNode;
    items: Todo[]
}

const Todos: React.FC<Props> = ({items, children}) => {

    return (
        <>
            <ul>
                {items.map(item => 
                    <li key={item.id}>{item.text}</li>
                )}
                
            </ul>
            {children}
        </>
    );
};

export default Todos;