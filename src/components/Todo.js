import React from 'react';

const Todo = (props) => {

    console.log(props)

    return(
        <div>
            <p>
                {props.item}
                {props.id}
            

                
            </p>

        </div>

    )
}

export default Todo 
