import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state= {

      task: "",
      todos:[]
   
    };
  }


    addTask = (task) => {
      const newTask = {
        task: task,
        id: Date.now(),
        completed:false
      };
      this.setState({
        todos: [...this.state.task, newTask]
      })
    }

    toggleTask = taskId => {
      this.setState({
        task: this.state.task.map(item => {
          if (taskId === item.id) {
            return{
              ...item,
              completed: !item.completed
            }
          }
        })
      })
    }

  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList task={this.state} />

        
      </div>
    );
  }
}

export default App;
