import React, { Component } from "react";
import { connect } from "react-redux";
import { createTicket } from "../../actions/actions";
import CreateTicket from "./CreateTicket";

class CreateTicketContainer extends Component {
  state = {
    name: "",
    description: "",
    price: "",
    eventId: this.props.eventId
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
