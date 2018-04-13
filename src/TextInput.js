import React, { Component } from 'react';
import './App.css';

class TextInput extends Component {
    handleClick() {
      this.props.saveText(this.refs.textInput.value)
      this.refs.textInput.value = ""
    }
    render() {
      return (
        <div>
          <input type="text" ref="textInput"/>
          <button onClick={this.handleClick.bind(this)}>Enter</button>
        </div>
      )
    }
  }

export default TextInput;