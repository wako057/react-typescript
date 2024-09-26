import React from "react";

interface Props {
    children?: React.ReactNode;
    items: string[]
}

const Todos: React.FC<Props> = ({items, children}) => {

    return (
        <>
            <ul>
                {items.map(item => 
                    <li key={item}>{item}</li>
                )}
                
            </ul>
            {children}
        </>
    );
};

export default Todos;