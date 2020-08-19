// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    console.log(props.task.todos)
    
    return(
        <div>
            {props.task.todos.map(item => {
                console.log(item.task)
                console.log(item.id)
               return  <Todo id={item.id} item={item.task}  />
            })}

            <button>Clear Completed</button>

              
        </div>




    );
};

export default TodoList;