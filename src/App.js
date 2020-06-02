import React, { Component } from "react";
import "./App.css";

class HelloWorld extends Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends Component {
  render() {
    return <HelloWorld />;
  }
}

export default App;
