import ToDoProvider from "./context/ToDoProvider";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import ToDoFilter from "./components/ToDoFilter";

function App() {

  return (
    <>
      <ToDoProvider>
        <div className="bg-slate-500 w-full md:w-[80%] lg:w-[60%] mx-auto px-6 py-4 lg:mt-14">
          <ToDoForm />
          <ToDoFilter />
          <ToDoList />
        </div>
      </ToDoProvider>
    </>
  )
}

export default App
