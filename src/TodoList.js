import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  removeTodo(todoId) {
    const filteredTodos = this.props.todoList.filter(todo => todo.id !== todoId);

    this.props.setFilteredTodos(filteredTodos)
  }
  
    render() {
      return (
        <div>
          <ul>
            {
              this.props.todoList.map(
                (todo, index) => {
                return(
                  <TodoItem  key={index} removeTodo={this.removeTodo.bind(this)} todo={todo} updateTodo={this.props.updateTodo}/>
                )
              })
            }
          </ul>       
       </div>
      )
    }
  }

export default TodoList;