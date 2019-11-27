import React, { Component } from "react";
import { connect } from "react-redux";
import { createTicket } from "../actions/events";
import CreateTicket from "./CreateTicket";

class CreateTicketContainer extends Component {
  state = {
    name: "",
    description: "",
    price: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createTicket(this.state);
    this.setState({
      name: "",
      // author:"",
      description: "",
      price: ""
    });
  };

  render() {
    return (
      <CreateTicket
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { createTicket })(CreateTicketContainer);
