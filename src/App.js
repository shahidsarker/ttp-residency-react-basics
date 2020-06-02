import React, { Component } from "react";
import "./App.css";

class HelloWorld extends Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

class HelloFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };

    setTimeout(this.updateName.bind(this), 2000);
  }

  updateName() {
    this.setState({ name: "Jeff" });
  }

  render() {
    return <h1>Hello {this.state.name}</h1>;
  }
}

class App extends Component {
  render() {
    return (
      <>
        <HelloWorld />
        <HelloFriend name="Tom" />
      </>
    );
  }
}

export default App;
