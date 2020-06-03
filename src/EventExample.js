import React, { Component } from "react";

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

export default EventExample;
