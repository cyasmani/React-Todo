import React from 'react'


class TodoForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            task: "",
            
        }
    }

        

        inputChange = (e) => {
            this.setState({
              task: e.target.value
            })
      
            console.log(e)
        };

        submitHandler = (e) => {
            e.preventDefault();
            this.props.addTask(this.state.task);
            this.setState({task: ""})

        }


    
    
        render(){
            return (
                <div>
                    <form onSubmit={this.submitHandler}>
                        <label>
                            <input type="text" name="task"  
                            value={this.state.task} 
                            onChange={this.inputChange}></input>
                        </label>
                        <button type="submit">Add</button>
                    </form>
                    
                </div>
            )

        }
    }


export default TodoForm;
