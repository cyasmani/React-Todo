// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props)
    console.log(props.task.todos)
    
    return(
        <div>
            {props.task.map(item => {
                console.log(item.task)
                console.log(item.id)
               return  <Todo key={item.id} item={item} toggleTask={props.toggleTask}  />
            })}

            <button className="clear-btn" onClick={props.clearCompleted}>Clear Completed</button>

              
        </div>




    );
};

export default TodoList;