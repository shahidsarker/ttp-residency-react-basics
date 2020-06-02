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
        <ContactCard
          name="Jill"
          mobile="7185555555"
          work="7182222222"
          email="jill@example.org"
        />
        <ContactCard
          name="Mike"
          mobile="3475555555"
          work="5552222222"
          email="mike@example.com"
        />
      </>
    );
  }
}

export default App;
