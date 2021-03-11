import React from "react";
import Todo from "./Todo"

const TodoList = props => {
    return (
        <div>
            {props.todos.map(task => (
                <Todo key={task.id} todo={task} toggleTask={props.toggleTask} />
            ))
            }
        </div>
    )
}

export default TodoList;