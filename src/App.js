import React, { Component } from "react";
import FormTest from "./FormTest";
import Decrement from "./Decrement";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Decrement start={5} />
        <Decrement start={15} />
        <Decrement start={50} />
        <FormTest />
      </>
    );
  }
}

export default App;
