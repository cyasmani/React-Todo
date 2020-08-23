import React from 'react';
import "../components/Todo.css"

const Todo = (props) => {

    console.log(props)

    return(
        <div
            className={`item${props.item.completed ? 'completed' : ""}`}
            onClick={() => props.toggleTask(props.item.id)}
            style={props.item.completed ? {textDecoration: 'line-through'}: null}
         >
            
            <p>
                {props.item.task}
                
            </p>

        </div>

    )
}

export default Todo 
