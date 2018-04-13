import React, { Component } from 'react';
import './App.css';

const Title = (props) => <h1>To Do: {props.todosAmount} </h1>

// class Title extends Component {
//     render() {
//       return (
//         <div>
//           <h1>To Do: {this.props.todosAmount} </h1>
//         </div>
//       )
//     }
//   }

export default Title;