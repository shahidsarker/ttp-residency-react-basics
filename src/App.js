import React, { Component } from "react";
import ContactCard from "./ContactCard";
import Decrement from "./Decrement";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Decrement start={5} />
        <Decrement start={15} />
        <Decrement start={50} />
      </>
    );
  }
}

export default App;
