// import React from 'react'

import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Hi",
            completed: true
        },
        {
            id: 2,
            text: "Hey",
            completed: false
        },
        {
            id: 3,
            text: "Hello",
            completed: false
        }
    ]);

    const addToDo = (newTodo) => {
        newTodo.id = uuidv4();
        setTodos([...todos, newTodo])
    };

    const deleteToDo = (todoID) => {
        console.log(todoID);
        const filterToDo = todos.filter((todo) => todo.id != todoID);
        setTodos([...filterToDo])
    }
    return (
        <ToDoContext.Provider value={{ todos, addToDo, deleteToDo }}>{children}</ToDoContext.Provider>
    )
}

export default ToDoProvider