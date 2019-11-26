import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent } from "../actions/events";
import CreateEvent from "./CreateEvent";

class CreateEventContainer extends Component {
  state = {
    url: "",
    name: "",
    description: "",
    startDate: "",
    endDate: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createEvent(this.state);
    this.setState({
      url: "",
      name: "",
      description: "",
      startDate: "",
      endDate: ""
    });
  };

  render() {
    return (
      <CreateEvent
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { createEvent })(CreateEventContainer);
