import React, { Component } from "react";
import ContactCard from "./ContactCard";
import Decrement from "./Decrement";
import "./App.css";

class EventExample extends Component {
  save() {
    alert("clicked save!");
  }
  render() {
    return (
      <div>
        <button onClick={this.save}>Save</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Decrement start={5} />
        <Decrement start={15} />
        <Decrement start={50} />
        <EventExample />
      </>
    );
  }
}

export default App;
