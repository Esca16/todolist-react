import { useContext, useRef, useState } from 'react'
import { ToDoContext } from '../../context/ToDoProvider'
import { RiEdit2Fill, RiDeleteBin2Fill, RiCheckFill, RiCloseFill } from "react-icons/ri";

const ToDoItem = ({ todo }) => {
  const { deleteToDo, editToDo } = useContext(ToDoContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const refEditInput = useRef(null);

  const deleteHandler = () => {
    deleteToDo(todo.id)
  }

  const EditHandler = () => {
    setIsEditMode(true);
    setIsReadOnly(false);
    refEditInput.current.focus();
  }

  const CancelHandler = () => {
    setIsEditMode(false);
    setIsReadOnly(true);
    refEditInput.current.value = todo.text;
  }

  const SaveChangeHandler = () => {
    setIsEditMode(false);
    setIsReadOnly(true);
    todo.text = refEditInput.current.value;
    editToDo(todo);
  };

  const CompleteCheckHandler = (e) => {
    console.log(e.target.checked);
    todo.completed = e.target.checked;
    editToDo(todo)
  }

  return (
    <div className='flex mt-4 justify-between items-center w-full bg-slate-400 py-4 px-5'>
      <div className='flex gap-6 items-center'>
        <input type="checkbox" name="chk-completed" id="chk-completed" onClick={(e) => CompleteCheckHandler(e)} defaultChecked={todo.completed ? true : false} />
        <input type="text" ref={refEditInput} defaultValue={todo.text} readOnly={isReadOnly} className={`outline-none bg-transparent w-full ${!isEditMode && todo.completed ? "line-through text-gray-200" : ""}`} onKeyUp={(e) => {
          if (e.key === "Enter") {
            SaveChangeHandler();
          }
        }} />
      </div>
      {isEditMode ? (
        <div>
          <button className="mr-4" onClick={SaveChangeHandler}>
            <RiCheckFill size={22} className="text-green-400" />
          </button>
          <button onClick={CancelHandler}>
            <RiCloseFill size={22} className="text-red-500" />
          </button>
        </div>
      ) : (
        <div>
          <button className='mr-4'>
            <RiEdit2Fill onClick={EditHandler} size={22} className="text-yellow-300" />
          </button>
          <button>
            <RiDeleteBin2Fill onClick={deleteHandler} size={22} className="text-red-500" />
          </button>
        </div>)}
    </div>
  )
}

export default ToDoItem