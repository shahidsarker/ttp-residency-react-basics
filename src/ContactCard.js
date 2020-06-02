import React, { Component } from "react";

class ContactCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li>mobile: {this.props.mobile}</li>
          <li>work: {this.props.work}</li>
          <li>email: {this.props.email}</li>
        </ul>
      </div>
    );
  }
}

export default ContactCard;

/**
 * Exercise: Contact Cards
Props and PropTypes
Define a ContactCard component that takes in a contact name, mobile number, work phone number and email as properties and displays the results in a visually appealing way.
The name, mobile number and email are required, but the work phone number is optional.
Create a page that display at least 3 different contact cards with different information.
 */
