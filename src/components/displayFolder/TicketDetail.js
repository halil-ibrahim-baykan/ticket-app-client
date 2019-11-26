import React, { Component } from "react";

export default class EventDetails extends Component {
  render() {
    if (!this.props.event) return <p>Loading...</p>;

    return (
      <div>
        <h1>{this.props.event.name}</h1>
        <p>Date: {this.props.event.date}</p>
        <p>{this.props.event.description}</p>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}
