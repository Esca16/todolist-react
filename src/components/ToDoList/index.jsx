import { useContext } from "react"
import { ToDoContext } from "../../context/ToDoProvider"
import ToDoItem from "./ToDoItem"

const ToDoList = () => {
    const { todos, isCompletedFilter, completedToDos } = useContext(ToDoContext)
    return (
        <div className="mt-5">
            <h2 className="text-white text-3xl font-semibold">ToDoList</h2>
            <div className="mt-5">
                {todos.map((todo) => {
                    if (!isCompletedFilter) {
                        if (!todo.completed) {
                            return <ToDoItem todo={todo} key={todo.id} />
                        }
                    } else {
                        if (todo.completed) {
                            return <ToDoItem todo={todo} key={todo.id} />
                        }
                    }
                })}

                {!isCompletedFilter && completedToDos.length > 0 && (
                    <div className="mt-4 py-5">
                        <div className="text-white">Completed</div>
                        {completedToDos.map((todo) => (
                            <ToDoItem todo={todo} key={todo.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ToDoList