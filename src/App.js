import React, { useState } from 'react';
import dummyData from "./dummyData";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: dummyData
    }
  }
  // create a function that adds to tasks to the list. This will go into Todo form
  addTask = (taskName) => {
    // set state to existing list of todos and add to it the new todo
    // adding the new todo will need to include a name, an id and it will not be completed on addition
    this.setState({
      todos: [...this.state.todos, {
        task: taskName,
        id: Date.now(),
        completed: false
      }]
    })
  }

  // create a function that would check if taks is done then cross out. This is passed into the list.

  toggleTask = (taskId) => {
    this.setState({
      todos: this.state.todos.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }

  clearTask = (taskId) => {
    this.setState({
      todos: this.state.todos.filter(task => (
        
      ))
      )}
  }


  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        {/* passing the task addition function to the todo form */}
        <TodoForm addtask={this.addTask}/>
        {/* passing the list of todos data and the toggle function to the todoslist  */}
        <TodoList todos={this.state.todos} toggleTask={this.toggleTask}/>
      </div>
    );
  }
}

export default App;
