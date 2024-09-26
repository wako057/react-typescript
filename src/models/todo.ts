import { v4 as uuidv4blu } from 'uuid';

class Todo {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = uuidv4blu();
    }
}

export default Todo;