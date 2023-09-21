// import React from 'react'

import { useContext } from "react"
import { ToDoContext } from "../../context/ToDoProvider"

const ToDoFilter = () => {
    const { setIsCompletedFilter } = useContext(ToDoContext);
    return (
        <div className="flex justify-end mt-8">
            <div>
                <input
                    type="checkbox"
                    name="chkfilter"
                    id="chkfilter"
                    onChange={(e) => {
                        console.log(e);
                        setIsCompletedFilter(e.target.checked);
                    }} />
                <label htmlFor="chkfilter" className="text-white ml-2 cursor-pointer text-lg ">Completed</label>
            </div>
        </div>
    )
}

export default ToDoFilter