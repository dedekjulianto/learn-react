import React, { Component } from "react";

import Output from "../small/output";
// import Counter from "../medium/Counter";

class todoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: ""
    };
  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.deleteTodo = this.deleteTodo.bind(this);
}

  handleChange(event) {
    this.setState({ input: event.target.value});
  }

  handleClick() {
    this.setState((prevState) => ({
      todos: prevState.todos.concat(prevState.input),
      input: ""
    }));
  }

  deleteTodo(target_index) {
    this.setState(prevState => ({
      todos: prevState.todos.filter((todo, index) => index !== target_index)
    }));
  }

  updateTodo() {
    let todos = Object.assign(this.state.todos);
    this.setState
  }

  render() {
    return (
      <div className = "container">
        <h1 className="title">Todo List App</h1>
        <input className="todo" type="text" onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.handleClick}>Add</button>
        <Output todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default todoList;
