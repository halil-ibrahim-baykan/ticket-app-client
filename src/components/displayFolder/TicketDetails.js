import React, { Component } from "react";

export default class TicketDetails extends Component {
  render() {
    if (!this.props.ticket) return <p>Loading..........</p>;

    return (
      <div>
        <h1>Name: {this.props.ticket.name}</h1>
        <h3>Description: {this.props.ticket.description}</h3>
        <p>Price: {this.props.ticket.price}</p>
        <p>Risk: {this.props.ticket.risk}</p>
        <p>Author: {this.props.ticket.user.name}</p>
        {/* <button onClick={this.props.onDelete}>Delete</button> */}
      </div>
    );
  }
}
