import React, { Component } from 'react';
import Title from './Title';
import TextInput from './TextInput';
import TodoList from './TodoList';
import './App.css';

class App extends Component {

  state = {
    todos: []
  }
  saveText(currentTodoText) {
    console.log("saving to state: " , this.state.todos)
    this.setState({
      todos: [...this.state.todos, {id: Date.now(), text: currentTodoText}]
    })
  }
  setFilteredTodos(filteredTodos) {
    this.setState({todos: filteredTodos})
  }
  render() {
    return (
      <div>
        <Title todosAmount={this.state.todos.length} />
        <TextInput saveText={(text) => this.saveText(text)} />
        <TodoList setFilteredTodos={(filteredTodos) => this.setFilteredTodos(filteredTodos)} todoList={this.state.todos}/>
      </div>
    );
  }
}

export default App;
