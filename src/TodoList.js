import React, { Component } from 'react';
import './App.css';

class TodoList extends Component {
  removeTodo(todoId) {
    const filteredTodos = this.props.todoList.filter(todo => todo.id !== todoId);
    this.props.setFilteredTodos(filteredTodos)
  }

    render() {
      console.log(this.props.todoList)
      return (
        <div>
          <ul>
            {
              this.props.todoList.map(
                (todo, index) => {
                console.log("Rendering TODO: ", todo)
                return(<li onClick={() => this.removeTodo(todo.id)} key={index}>{todo.text}</li>)
              })
            }
          </ul>       
       </div>
      )
    }
  }

export default TodoList;