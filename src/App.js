import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

const task = [
  {
    item: 'Code',
    id: 1,
    completed: false
  },
  {
    item: 'Watch Anime',
    id: 2,
    completed: false
  },
  {
    item: 'Work',
    id: 3,
    completed: false
  },
  {
    item: 'Hang out with my boo',
    id: 4,
    completed: false
  },
  {
    item: 'Wash the Dishes',
    id: 5,
    completed: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state= {

      task
   
    };
  }


    addTask = (task) => {
      const newTask = {
        task: task,
        id: Date.now(),
        completed:false
      };
      this.setState({
        task: [...this.state.task, newTask]
      })
    }

    toggleTask = taskId => {
      console.log(taskId)
      this.setState({
        task: this.state.task.map(item => {
          console.log(item)
          if (taskId === item.id) {
            return{
              ...item,
              completed: !item.completed
            }
          }
          return item;
        })
      })
    }

    clearCompleted = e => {
      e.preventDefault();
      this.setState({
        task: this.state.task.filter(item => !item.completed)
      })
    }

  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList task={this.state.task} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted} />

        
      </div>
    );
  }
}

export default App;
