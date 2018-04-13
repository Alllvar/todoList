import React, { Component } from 'react';
import Title from './Title';
import TextInput from './TextInput';
import TodoList from './TodoList';
import './App.css';

class App extends Component {

  state = {
    todosAmount: 0,
    todos: []
  }
  saveText(currentTodoText) {
    console.log("saving to state: " + currentTodoText)
    this.setState({
      todos: [...this.state.todos, currentTodoText],
      todosAmount: this.state.todosAmount + 1
    })
  }
  render() {
    return (
      <div>
        <Title todosAmount={this.state.todosAmount} />
        <TextInput saveText={(text) => this.saveText(text)} />
        <TodoList todoList={this.state.todos}/>
      </div>
    );
  }
}

export default App;
