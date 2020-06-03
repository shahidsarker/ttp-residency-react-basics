import React, { Component } from "react";

class SelectForm extends Component {
  constructor(props) {
    super(props);
    this.state = { usState: "CA" };
  }

  handleSelectChange = (event) => {
    this.setState({ usState: event.target.value });
  };

  render() {
    return (
      <select value={this.state.usState} onChange={this.handleSelectChange}>
        <option value="CA">California</option>
        <option value="FL">Florida</option>
        <option value="NY">New York</option>
      </select>
    );
  }
}

export default SelectForm;
