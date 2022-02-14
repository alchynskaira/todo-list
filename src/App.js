import React,{useState, useEffect}from  "react";
import shortid from 'shortid';
import TodoList from "./components/TodoList/TodoList";
import TodoEditor from "./components/TodoEditor/TodoEditor";



const App = ()=>{
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);



    const addTodo = (text) => {
        const newTodos = {
            id: shortid.generate(),
            text: text,
            isCompleted: false,
            filter: "",
        };
        setTodos([newTodos, ...todos]);
        window.localStorage.setItem( "todos", JSON.stringify(newTodos))
    };


    useEffect(() => {
        localStorage.setItem( "todos", JSON.stringify(todos));
    }, [todos])


    const deleteTodo = todoId => {
          const deleteTodo = todos.filter(todo => todo.id !== todoId);
             setTodos(deleteTodo);
    };

    const toggleCompleted = todoId => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === todoId ? { ...todo, complete: !todo.complete } : {...todo }
            )
        ])
    }


    return (
      <>

                      <TodoEditor
                            onSubmit={addTodo}
                       />
                       <TodoList
                            todos={todos}
                            onDeleteTodo={deleteTodo}
                            onToggleCompleted={toggleCompleted}
                       />

            </>
    );
}

export default App;



