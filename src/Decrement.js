import React, { Component } from "react";

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.start };
  }

  handleDecrement = (state) => {
    this.setState({ number: state.number - 1 });
  };

  render() {
    return (
      <div>
        {this.state.number}{" "}
        <button onClick={() => this.handleDecrement(this.state)}>
          decrement
        </button>
      </div>
    );
  }
}

export default Decrement;
