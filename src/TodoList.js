import React, { Component } from 'react';
import './App.css';

class TodoList extends Component {

    render() {
      console.log(this.props.todoList)
      return (
        <div>
          <ul>{this.props.todoList.map((todo, index) => <li key={index}>{todo}</li>)}</ul>
        </div>
      )
    }
  }

export default TodoList;