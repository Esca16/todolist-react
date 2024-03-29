import React, { useContext, useRef } from 'react'
import { ToDoContext } from '../../context/ToDoProvider'
import {BsFillPlusSquareFill} from "react-icons/bs"

const ToDoForm = () => {
    const { addToDo } = useContext(ToDoContext);
    const refTask = useRef(null);

    const chkValue = (refEl) => {
        // console.log(refEl);
        if (refEl.current.value == "") {
            refEl.current.focus();
            refEl.current.classList.add("border-red-500", "border-2");
            console.log(refEl.current.classList);
            return false;
        } return true;
    };

    const FormSubmitHandler = (e) => {
        e.preventDefault();
        if (chkValue(refTask)) {
            const newToDo = {
                text: refTask.current.value,
                completed: false,
            };
            addToDo(newToDo);
            refTask.current.value = "";
            refTask.current.focus();
        };
    };
    return (
        <form onSubmit={(e) => FormSubmitHandler(e)}>
            <div className='flex gap-6'>
                <input
                    type="text"
                    name='todo'
                    id='todo'
                    ref={refTask}
                    className='w-[90%] outline-none pl-3'
                    onChange={() => {
                        if (refTask.current.value) {
                            refTask.current.classList.remove("border-red-500", "border-2")
                        }
                    }}
                />
                <button><BsFillPlusSquareFill size={44} color="white" /></button>
            </div>
        </form>
    )
}

export default ToDoForm