import React, { Component } from "react";
import Home from "./pages/home";
import todoList from "./pages/todoList";
import About from "./pages/about";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/todolist">Todo List</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Route path="/home" component={Home} />
          <Route path="/todolist" component={todoList} />
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
