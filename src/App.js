import React, { Component } from "react";
import ContactCard from "./ContactCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <ContactCard
          name="John"
          mobile="2125555555"
          work="8002222222"
          email="hello@example.com"
        />
      </>
    );
  }
}

export default App;
