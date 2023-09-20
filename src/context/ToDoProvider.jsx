// import React from 'react'

import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const IsToDos = JSON.parse(localStorage.getItem("st_r_d"));
        IsToDos && setTodos([...IsToDos]);
    }, [])

    const addToDo = (newTodo) => {
        newTodo.id = uuidv4();
        localStorage.setItem("st_r_d", JSON.stringify([...todos, newTodo]));
        setTodos([...todos, newTodo])
    };

    const deleteToDo = (todoID) => {
        console.log(todoID);
        const filterToDo = todos.filter((todo) => todo.id != todoID);
        setTodos([...filterToDo])
        localStorage.setItem("st_r_d", JSON.stringify([...filterToDo]));
    };

    const editToDo = (todo) => {
        const editedToDo = todos.map((td) => {
            if (td.id == todo.id) {
                return todo;
            } return td;
        });

        setTodos([...editedToDo]);
        localStorage.setItem("st_r_d", JSON.stringify([...editedToDo]))
    }
    return (
        <ToDoContext.Provider value={{ todos, addToDo, deleteToDo, editToDo }}>{children}</ToDoContext.Provider>
    )
}

export default ToDoProvider