import React, { Component } from 'react';
import './App.css';

class TodoList extends Component {
  removeTodo(todoId) {
    const filteredTodos = this.props.todoList.filter(todo => todo.id !== todoId);

    this.props.setFilteredTodos(filteredTodos)
  }
  componentDidUpdate() {
    console.log(this.props)
  }

    render() {
      return (
        <div>
          <ul>
            {
              this.props.todoList.map(
                (todo, index) => {
                return(<li key={index}><input defaultValue={todo.text} />
                
                <button onClick={() => this.removeTodo(todo.id)}>X</button>
                </li>)
              })
            }
          </ul>       
       </div>
      )
    }
  }

export default TodoList;