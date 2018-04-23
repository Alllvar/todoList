import React, { Component } from 'react';
import './App.css';

class TodoItem extends Component {

    handleKeyUp(event) {
        if(event.keyCode === 13) {
           this.props.updateTodo({id: this.props.todo.id, text: event.target.value}) 
        }
    }

    render() {
        return (
        <li>
            <input defaultValue={this.props.todo.text} onKeyUp={this.handleKeyUp.bind(this)}/>
            <button onClick={() => this.props.removeTodo(this.props.todo.id)}>X</button>
        </li>
        )
    }
}  

export default TodoItem;