import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  removeTodo(removeTodoId) {
    const filteredTodos = this.props.todoList.filter(todo => todo.id !== removeTodoId);

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
                  <TodoItem  key={todo.id} removeTodo={this.removeTodo.bind(this)} todo={todo} updateTodo={this.props.updateTodo}/>
                )
              })
            }
          </ul>       
       </div>
      )
    }
  }

export default TodoList;