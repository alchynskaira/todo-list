import React from "react";
import Todo from "../Todo/Todo";
import "../../style.css";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) =>
 (
        <ul className="todoList">
            {todos.map(({ id, text, completed}) => (
                <li
                    key={id}
                   className={todos.completed ? "item-text strike" : "todoList-item"}
                >
                    <Todo
                        text={text}
                        completed={completed}
                        onToggleCompleted={() => onToggleCompleted(todos.id)}
                        onDelete={() =>  onDeleteTodo(id)}
                    />
                </li>
            ))}
        </ul>
    );

export default TodoList;

